import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(rootDir, "dist", "client");
const serverEntryUrl = pathToFileURL(path.join(rootDir, "dist", "server", "server.js")).href;
const port = Number(process.env.PORT ?? 3000);

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

const serverModule = await import(serverEntryUrl);
const serverEntry = serverModule.default ?? serverModule;

if (typeof serverEntry?.fetch !== "function") {
  throw new Error("Render server could not find a valid fetch handler in dist/server/server.js");
}

http
  .createServer(async (req, res) => {
    try {
      const requestUrl = new URL(req.url ?? "/", getRequestOrigin(req));
      const assetPath = resolveAssetPath(requestUrl.pathname);

      if (assetPath) {
        const served = await tryServeAsset(assetPath, req.method ?? "GET", res);
        if (served) return;
      }

      const request = createWebRequest(req, requestUrl);
      const response = await serverEntry.fetch(request, {}, createExecutionContext());
      await writeWebResponse(response, req.method ?? "GET", res);
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Internal Server Error");
    }
  })
  .listen(port, () => {
    console.log(`Render server listening on port ${port}`);
  });

function getRequestOrigin(req) {
  const forwardedProto = req.headers["x-forwarded-proto"];
  const protocol = Array.isArray(forwardedProto)
    ? forwardedProto[0]
    : forwardedProto?.split(",")[0] ?? "http";

  return `${protocol}://${req.headers.host ?? `127.0.0.1:${port}`}`;
}

function resolveAssetPath(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const relativePath = decodedPath.replace(/^\/+/, "");
  if (!relativePath) return null;

  const assetPath = path.resolve(clientDir, relativePath);
  if (!assetPath.startsWith(clientDir)) return null;
  return assetPath;
}

async function tryServeAsset(assetPath, method, res) {
  try {
    await access(assetPath);
    const fileStats = await stat(assetPath);
    if (!fileStats.isFile()) return false;

    res.statusCode = 200;
    res.setHeader(
      "content-type",
      contentTypes.get(path.extname(assetPath).toLowerCase()) ?? "application/octet-stream",
    );
    res.setHeader("content-length", fileStats.size);
    res.setHeader("cache-control", "public, max-age=31536000, immutable");

    if (method === "HEAD") {
      res.end();
      return true;
    }

    await new Promise((resolve, reject) => {
      const stream = createReadStream(assetPath);
      stream.on("error", reject);
      stream.on("end", resolve);
      stream.pipe(res);
    });

    return true;
  } catch {
    return false;
  }
}

function createWebRequest(req, requestUrl) {
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
      continue;
    }
    if (value !== undefined) headers.set(key, value);
  }

  return new Request(requestUrl, {
    method: req.method,
    headers,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : Readable.toWeb(req),
    duplex: "half",
  });
}

function createExecutionContext() {
  return {
    waitUntil(promise) {
      promise.catch((error) => {
        console.error("waitUntil rejected", error);
      });
    },
    passThroughOnException() {},
  };
}

async function writeWebResponse(response, method, res) {
  res.statusCode = response.status;

  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (method === "HEAD" || !response.body) {
    res.end();
    return;
  }

  await new Promise((resolve, reject) => {
    const stream = Readable.fromWeb(response.body);
    stream.on("error", reject);
    res.on("close", resolve);
    res.on("finish", resolve);
    stream.pipe(res);
  });
}
