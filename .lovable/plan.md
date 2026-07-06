
# Mohammad Abdullah — Cybersecurity Analyst Portfolio

Premium, dark, technical portfolio in React (TanStack Start). Deep-red accents at medium intensity, layered composition, tasteful motion — no minimal-empty feel, no generic dev template. **Already implemented in the previous build turn** — approve this plan again only if you want changes; otherwise just tell me what to tweak.

## 1. Featured projects (curated 5, with reasons)

Audited your 20 public GitHub repos and cross-referenced your resume:

| # | Project | Why it made the cut |
|---|---------|---------------------|
| 1 | **CyberSentinel** (FYP) — hybrid AI-IDS | Flagship. 2nd place ICCOR poster, 3 repos (Frontend/Backend/AI), 94% detection, Wazuh + Random Forest + Isolation Forest + React + FastAPI + MongoDB. Perfect cybersecurity+AI+full-stack showcase. |
| 2 | **NimbusWatch** — hybrid-cloud malicious-traffic detection | Recent (Jun 2026), strong README. Vertex AI training, Cloud Run inference, HistGradientBoostingClassifier on CICIDS2017, FastAPI. Not on your resume, but a real differentiator for cloud + MLOps + security. |
| 3 | **Password Cracker Tool** | Solid cybersecurity utility. MD5/SHA-1/SHA-256, brute-force + dictionary, sub-500ms crack time on 10K wordlist. |
| 4 | **FitnessFreak** | Full-stack + multi-role UX (dietitian/trainer/member), 40% form-error reduction. Balances the security-heavy list with product engineering breadth. |
| 5 | **Local Ollama ChatBot** | Practical LLM integration, on-device inference — a modern, relevant skill. Small but sharp. |

**Dropped:** Line Follower Robot (hardware, no repo evidence). Learning repos (React-JS-Learning, Google-Cybersecurity, CEH-Practical-Guide, Cybersecurity-Cheat-Sheet) — surfaced as a single "Learning & Notes" strip in About instead of cards.

## 2. Visual & structural direction

- **Theme:** near-black `oklch(0.10 0.008 20)` with layered charcoal panels.
- **Accent:** deep crimson `oklch(0.58 0.20 20)` at medium intensity (3/5): CTAs, eyebrows, hover glow, one radial glow per section.
- **Support:** cool gray + muted steel-blue used sparingly.
- **Typography:** Space Grotesk (display) + Inter (body) + JetBrains Mono (numeric/section labels), loaded via `<link>` in `__root.tsx`.
- **Hero photo:** duotone red-black portrait, cyber-grid overlay, corner ticks, MA//01 badge, red radial glow. No destructive edit to your source photo.
- **Motion:** Framer Motion scroll-reveals, hover lifts, animated pulse on live indicator. Under 400ms, respects `prefers-reduced-motion`.
- **Layers:** fixed grid background, hairline borders, glass panels with backdrop-blur, gradient dividers.

## 3. Page structure

```
Nav (fixed, glass, MA logo + pulse) — Home · About · Skills · Projects · Experience · Education · Contact · Resume CTA
Hero              → name / title / summary / CTAs / duotone avatar card + 3 metric pills
About             → bio panel + Quick Facts + Learning & Notes links
Skills            → 3 category panels (Cybersecurity & Tools · Web Dev · AI & ML)
Projects          → 5 alternating feature rows with cover art, highlights, stack, GitHub link
Experience        → Techaccess Pakistan card with 4 bullets + 4 metric callouts
Education         → Degree card + Certifications/Awards grid
Contact           → 4 info cards with copy-to-clipboard + Download Resume CTA
Footer            → socials, back-to-top, © 2026
```

## 4. Files

```
src/data/profile.ts                     (single source of truth)
src/routes/__root.tsx                   (head meta + font links)
src/routes/index.tsx                    (composition)
src/styles.css                          (tokens, red palette, utilities)
src/components/site/Nav.tsx
src/components/site/Hero.tsx
src/components/site/About.tsx
src/components/site/Skills.tsx
src/components/site/Projects.tsx
src/components/site/Experience.tsx
src/components/site/Education.tsx
src/components/site/Contact.tsx
src/components/site/Footer.tsx
src/components/site/SectionHeader.tsx
src/components/site/GridBackground.tsx
src/assets/abdullah-portrait.jpg        (your photo)
src/assets/project-*.jpg                (5 generated cover images)
public/Mohammad_Abdullah.pdf            (downloadable resume)
```

Dependency added: `framer-motion`.

## 5. Guarantees

- No fabricated metrics, tools, dates, or awards — everything sourced from your resume.
- Every project link points to a real repo on `github.com/AbdullahYousaf-13`.
- Fully responsive (desktop / tablet / mobile), WCAG-AA contrast, semantic HTML.
- Nothing you excluded — no blog, no testimonials, no visitor counter, no online status, no "Recent Insights".

If you want changes (swap a project back to Line Follower, adjust red intensity, different hero framing, add/remove a section, tweak copy), tell me which and I'll iterate.
