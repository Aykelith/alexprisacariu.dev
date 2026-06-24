# Post Frontmatter Fields

Each post lives in `posts/<dir-name>/post.mdx`. To hide a post from listings, set `hide: true` in frontmatter (the old `_` directory prefix convention is retired).

The directory name becomes the URL slug (`/posts/<dir-name>`).

---

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | Yes | Post title, shown on the page and in listings |
| `publishedOn` | `string` (ISO 8601) | Yes | Publication datetime, e.g. `"2024-05-21T12:25:43.054Z"` |
| `tags` | `string[]` | Yes | Visible tags shown on the post page and in listings |
| `seoTitle` | `string` | No | `<title>` tag for SEO; falls back to `title` if empty |
| `seoDescription` | `string` | No | Meta description for SEO and social cards |
| `seoKeywords` | `string[]` | No | Meta keywords |
| `thumbnail` | `string` or `ImageObject` | No | Thumbnail shown in listings; defaults to a site-wide placeholder if missing |
| `cover` | `string` or `ImageObject` | No | Hero image shown at the top of the post page; defaults to a site-wide placeholder if missing |
| `otherImages` | `ImageEntry[]` | No | Additional images shown at the bottom of the post page |
| `showNoAIPost` | `boolean` | No | Shows a "written by a human" notice at the bottom of the post |
| `showAIDisclaimer` | `boolean` | No | Shows an AI-generated images disclaimer at the bottom of the post |
| `hide` | `boolean` | No | If `true`, excluded from all public listings and blog pages (individual post page still generated) |

---

## Types

### `ImageObject`

Used for `thumbnail` and `cover`. Can be a plain path string or an object with format variants:

```yaml
# simple string
thumbnail: "/imgs/posts/post013/cover-small.png"

# object with format variants (preferred — browser picks best format)
thumbnail:
  png: "/imgs/posts/post015/thumbnail.png"
  webp: "/imgs/posts/post015/thumbnail.webp"
```

When neither `thumbnail` nor `cover` is provided, a site-wide placeholder image is used automatically.

### `ImageEntry`

Each item in `otherImages`:

```yaml
otherImages:
  - src: "/imgs/posts/post013/screenshot1.png"
    alt: "optional alt text"
```

---

## Examples

### Minimal post

```yaml
---
title: "How I built X"
publishedOn: "2024-06-01T10:00:00.000Z"
tags:
  - JavaScript
seoTitle: "How I built X — a deep dive"
seoDescription: "A walkthrough of building X, covering architecture, trade-offs, and lessons learned."
seoKeywords:
  - JavaScript
  - architecture
---
```

### Full post with images and badges

```yaml
---
title: "Applying retry pattern in Async Rust"
publishedOn: "2026-01-20T12:25:43.054Z"
tags:
  - Rust
  - Async
seoTitle: "Applying retry pattern in Async Rust"
seoDescription: "Implementing robust retry in async Rust with exponential backoff and full jitter."
seoKeywords:
  - Rust
  - Async
  - Retry
thumbnail:
  png: "/imgs/posts/post015/thumbnail.png"
  webp: "/imgs/posts/post015/thumbnail.webp"
cover:
  png: "/imgs/posts/post015/cover.png"
  webp: "/imgs/posts/post015/cover.webp"
showNoAIPost: true
---
```

---

## Notes

- `thumbnail` vs `cover`: on the post page, `cover` is displayed at the top; `thumbnail` is used in listing cards. If `cover` is missing, the post page falls back to `thumbnail`. Both default to placeholder images if absent.
- Hidden posts: set `hide: true` in frontmatter. The directory name prefix `_` is no longer used.
- `/blog-hidden` shows all posts including hidden ones (no crawling allowed).
- `showNoAIPost` and `showAIDisclaimer` are mutually exclusive in intent but not enforced — pick the one that fits.
