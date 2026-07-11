# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # dev server with Turbopack
pnpm build        # build → export static → move out/ to docs/ + write CNAME + .nojekyll
pnpm lint         # Biome check
pnpm format       # Biome format (write)
```

No test suite exists.

## Architecture

Next.js 15 static export (`output: "export"`). Built output lives in `docs/` (not `out/`) — GitHub Pages serves from there.

**Content pipeline** — posts and projects are file-system based, not a CMS:
- `posts/<dir-name>/post.mdx` — blog posts. Dirs prefixed with `_` are drafts (excluded unless `includeIgnoredPosts=true`).
- `projects/<dir-name>/project.mdx` — project pages. Same `_` draft convention.
- MDX frontmatter parsed with `gray-matter`. Fields: `title`, `tags`, `publishedOn`, `thumbnail`, `cover`, `seoTitle`, `seoDescription`, `seoKeywords`, `showNoAIPost`, `showAIDisclaimer`.
- MDX rendered via `next-mdx-remote-client` with `rehype-pretty-code` (Shiki, github-light/dark themes), `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`.
- Server utilities in `utilities/server/blog/` and `utilities/server/projects/` handle reading, sorting, pagination.

**Routing:**
- `/posts/[id]` — id = post directory name
- `/projects/[id]` — id = project directory name
- `/blog/[page]` — paginated listing (`constants/PostsPerPage.js`)
- `/feed.xml` — RSS route handler

**Path alias:** `@/` maps to the repo root (`jsconfig.json`).

**Constants to update:**
- `constants/AvailableForWork.js` — `0` not available, `1` limited, `2` available
- `constants/HomeTechstack.js` — tech items shown on home page
- `constants/Menu.js` — nav links

**Theme system** — dark/light mode stored in `localStorage` under `"theme-color-scheme"`. Initial theme applied inline via a blocking `<script>` in `<head>` to prevent flash. Provider/hook in `components/theme_color_scheme/`.

**Progress bar** — custom implementation in `components/progress_bar/`. Wraps the layout; links must use `ProgressBarLink` (re-exported from `components/progress_bar`) instead of Next `Link` to trigger the animation.

**Modals system** — event-driven modal stack in `components/modals_system/`. Triggered via custom events, not React state passed down.

**SVGs** — imported directly as React components via `@svgr/webpack` (configured for both webpack and Turbopack in `next.config.mjs`).

**Linter:** Biome 2 (`biome.json`). 2-space indent, Next.js + React rules enabled, import organizer on.

**Deployment:** push to `master` → `docs/` contains the static site → GitHub Pages serves it at `alexprisacariu.dev`.

## Documentation sync

Keep files in `documentation/` in sync with the code:

- **`documentation/PROJECTS.md`** — update whenever you touch anything project-related: `projects/<dir>/project.mdx` frontmatter fields, `utilities/server/projects/`, or `app/projects/`. If a field is added, removed, or its behaviour changes, reflect that in the table and examples.

- **`documentation/POSTS.md`** — update whenever you touch anything post-related: `posts/<dir>/post.mdx` frontmatter fields, `utilities/server/blog/`, or `app/posts/`. If a field is added, removed, or its behaviour changes, reflect that in the table and examples.
