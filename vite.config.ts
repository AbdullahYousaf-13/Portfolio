// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

function stripTanStackDevSourceAttrs(): Plugin {
  const sourceFilePattern = /\.[cm]?[jt]sx?(?:\?.*)?$/;

  return {
    name: "strip-tanstack-dev-source-attrs",
    enforce: "pre",
    apply(config, { command }) {
      return command === "serve" && config.mode === "development";
    },
    transform(code, id) {
      if (id.includes("node_modules") || !sourceFilePattern.test(id) || !code.includes("data-tsd-source")) {
        return null;
      }

      const strippedCode = code.replace(/\s+data-tsd-source=(?:"[^"]*"|'[^']*'|\{[^}]*\})/g, "");
      return strippedCode === code ? null : { code: strippedCode, map: null };
    },
  };
}

export default defineConfig({
  plugins: [stripTanStackDevSourceAttrs()],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
