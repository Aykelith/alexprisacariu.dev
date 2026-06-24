# Project Frontmatter Fields

Each project lives in `projects/<dir-name>/project.mdx`. The directory name becomes the URL slug (`/projects/<dir-name>`) unless overridden by `urlPart`.

To hide a project from listings, set `hide: true` in frontmatter (the old `_` directory prefix convention is retired).

---

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | Yes | Project name, shown everywhere |
| `description` | `string` | No | Short description shown in listing and on project page |
| `thumbnail` | `string` or `ImageObject` | No | Thumbnail image — used in listing and home page cards |
| `cover` | `string` or `ImageObject` | No | Hero image shown at the top of the project page |
| `tags` | `string[]` | No | Tags shown in listing cards |
| `techStack` | `string[]` | No | Full tech stack shown in the project page stats table |
| `pinned` | `number` | No | If set, project appears on the home page; sorted ascending (1 = first) |
| `url` | `string` | No | Live URL for the project |
| `urlPart` | `string` | No | Overrides the URL slug; default is the directory name |
| `otherImages` | `ImageEntry[]` | No | Gallery shown at the bottom of the project page |
| `yearsActive` | `[number\|string, number\|string]` | No | Start and end year; use `"present"` for ongoing projects |
| `myInvolvement` | `string` | No | Author's role description, shown in the stats table |
| `linkedPosts` | `string[]` | No | Post directory names to show as linked blog posts on the project page |
| `showAIDisclaimer` | `boolean` | No | Shows an AI-generated images disclaimer at the bottom of the page |
| `hide` | `boolean` | No | If `true`, excluded from all public listings (still has an individual page) |
| `status` | `string` | No | Project lifecycle status — one of: `idea`, `in_planning`, `in_implementation`, `in_production`, `done`, `abandoned`, `on_hold` |
| `started_on` | `string` (ISO 8601) | No | Date the project was started, e.g. `"2024-01-15"` |
| `last_activity_on` | `string` (ISO 8601) | No | Date of the last meaningful activity, e.g. `"2025-06-01"` |

---

## Types

### `ImageObject`

Used for `thumbnail` and `cover`. Can be a plain path string or an object with format variants:

```yaml
# simple string
thumbnail: "/imgs/projects/my-project/thumbnail.jpg"

# object with format variants (preferred — browser picks best format)
thumbnail:
  png: "/imgs/projects/my-project/thumbnail.png"
  webp: "/imgs/projects/my-project/thumbnail.webp"
```

### `ImageEntry`

Each item in `otherImages` can be any of three shapes:

```yaml
otherImages:
  # 1. plain string path (normalized to {src} internally)
  - "/imgs/projects/my-project/image1.jpeg"

  # 2. object with format variants
  - png: "/imgs/projects/my-project/image2.png"
    webp: "/imgs/projects/my-project/image2.webp"
    alt: "optional alt text"

  # 3. explicit src key
  - src: "/imgs/projects/my-project/image3.jpeg"
    alt: "optional alt text"
```

---

## Examples

### Minimal project

```yaml
---
title: "My Project"
description: "A short description"
tags:
  - NextJS
  - TypeScript
yearsActive: [2024, "present"]
techStack:
  - NextJS
  - TypeScript
myInvolvement: "Built the whole thing"
---
```

### Pinned project with WebP images and linked posts

```yaml
---
title: "My Pinned Project"
description: "Shown on the home page"
thumbnail:
  png: "/imgs/projects/my-project/thumbnail.png"
  webp: "/imgs/projects/my-project/thumbnail.webp"
cover:
  png: "/imgs/projects/my-project/cover.png"
  webp: "/imgs/projects/my-project/cover.webp"
tags:
  - NextJS
pinned: 1
url: "https://example.com"
otherImages:
  - png: "/imgs/projects/my-project/image1.png"
    webp: "/imgs/projects/my-project/image1.webp"
    alt: "The home screen"
yearsActive: [2023, "present"]
techStack:
  - NextJS
  - TypeScript
myInvolvement: "Lead developer"
linkedPosts:
  - "post014_alexprisacariu_v2"
---
```

---

## Notes

- `tags` vs `techStack`: `tags` are shown in listing cards; `techStack` is shown on the project detail page. They can differ.
- `pinned`: only projects with `pinned` set appear on the home page. Lower value = earlier position.
- Hidden projects: set `hide: true` in frontmatter. The directory name prefix `_` is no longer used.
- `status` colors are defined in `constants/ProjectStatuses.js`. Status badges appear on `/projects-hidden` and `/projects-grid`.
- `/projects-grid` shows `abandoned` and `idea` projects hidden by default (user can toggle).
- Individual project pages are always generated regardless of `hide` or `status`.
