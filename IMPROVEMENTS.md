# Website Improvements & Recommendations

Analysis of `alexprisacariu.dev` covering design, content, SEO, and accessibility.
Items are grouped and roughly ordered by impact / effort.

---

## 1. SEO & Metadata (highest impact, low effort)

### 1.1 Root metadata is placeholder text
`app/layout.js:22-25`:

```js
title: "Alexandru Prisacariu: The Website",
description: "Place where Alexandru Prisacariu posts things",
```

This is what Google and social platforms show for the homepage and every
page that lacks its own metadata. Fix:

- Real title with a value proposition, e.g. `"Alexandru Prisacariu — Full-stack developer"`.
- Use a title **template** so child pages append automatically:
  ```js
  title: { default: "Alexandru Prisacariu — Full-stack developer", template: "%s · Alexandru Prisacariu" }
  ```
- Add `metadataBase: new URL("https://alexprisacariu.dev")` so relative OG image URLs resolve.
- Add default `openGraph`, `twitter`, `authors`, and `keywords` at the root.

### 1.2 Missing `generateMetadata` on several pages
Only `app/posts/[id]` and `app/blog/[page]` export metadata. These pages
fall back to the placeholder root title:

- `app/about/page.js`
- `app/projects/page.js`
- `app/projects/[id]/page.js` ← project pages have **no** title/description/OG when shared
- `app/cv/page.js`

Add `generateMetadata` to each. Project pages already have rich frontmatter
(`title`, `description`, `cover`, `tags`) — mirror the post page implementation.

### 1.3 No default Open Graph / social share image
Sharing the homepage, about, or projects index on LinkedIn/X yields no
preview image. Add a static `app/opengraph-image.png` (1200×630) or generate
one with `next/og`.

### 1.4 No `robots.txt`
There's a `sitemap.js` but no robots route. Add `app/robots.js` pointing to
the sitemap. (A Google verification file exists in `public/`, so search
indexing is intended.)

### 1.5 Twitter card lacks `site`/`creator`
`app/posts/[id]/page.js:164` sets the card but not `site: "@aykelith"` /
`creator: "@aykelith"`.

---

## 2. Bugs shipping to production

### 2.1 Duplicate object key silently drops attribution
`app/page.js:85-90`:

```js
dangerouslySetInnerHTML={{
    __html: `<!-- Website inspired by https://swajp.me/ -->`,
    __html: `<!-- Icons from https://tabler.io/ -->`,   // overwrites the first
}}
```

Two `__html` keys — JS keeps only the last, so the "inspired by" comment never
renders. Also, `dangerouslySetInnerHTML` on a `<span>` to emit static comments
is the wrong tool. Replace with a normal JSX comment block or a single string.

### 2.2 Placeholder alt text shipped
`projects/panoro-ro/project.mdx`: `alt: "abc abc abc"`. Real alt text is live
on the site. Grep all project `.mdx` for placeholder alts.

### 2.3 Typos in user-facing strings
- `app/posts/[id]/page.js:102`: "gramatically" → "grammatically".
- Verify the AI-disclaimer / no-AI notices read cleanly.

---

## 3. Content

### 3.1 Homepage hero value proposition is generic
`app/page.js:30-32`:

> "A developer from Romania. Passionate about finding solutions and creating
> modern applications in any technology."

"any technology" and "passionate about finding solutions" are filler. State
what you actually do and for whom: years of experience, domains (real estate,
fintech, audio), founder of Softprovider. Give a visitor a reason to scroll.

### 3.2 Your name is never shown plainly on the homepage
The animated `Title` reads "Hello. I'm [implementing performant solutions]".
Clever, but a first-time visitor doesn't see **"Alexandru Prisacariu"** above
the fold. Consider a static name line above or beneath the animation.

### 3.3 Techstack list is bloated (30 items)
`constants/HomeTechstack.js` lists 30 technologies including `ChatGPT API`,
`Binance API`, `Meteor`, `SFML`, `Godot`. A wall of tags reads as a résumé
keyword dump and dilutes signal. Curate to ~8–12 core technologies; move the
long tail to the CV. The colored dots are also color-only (see 4.3).

### 3.4 Legacy posts may hurt positioning
Posts `post001`–`post007` are `*_old_*` game-dev micro-tutorials (custom
cursor, flip sprites, simple button). They are **not** `_`-prefixed, so they're
published. Mixed with recent backend/Rust content, the blog has no clear theme.
Decide: keep as an archive (tag them "archive"), or draft the weakest ones by
renaming the dir with a leading `_`.

### 3.5 Project copy is thin
Examples from `projects/panoro-ro/project.mdx`: `myInvolvement: "Implemented the
website"`. For a portfolio, expand involvement, outcomes, and impact (traffic,
performance, what was hard). The statistics block (`app/projects/[id]/page.js:18`)
is a good frame — give it substance.

### 3.6 Post timestamps show hour & minute
`app/posts/[id]/page.js:118-127` formats dates as `"June 25, 2026, 12:25 PM"`.
Publish *time* is noise for a blog. Drop `hour`/`minute`.

### 3.7 Footer is bare
`components/footer/Footer.js` shows only a copyright line. Add: nav links,
social icons (reuse `ConnectWithMeCard` sources), and an RSS link
(`/feed.xml` exists but is undiscoverable). Also add the RSS `<link rel="alternate">`
to `<head>` so feed readers autodetect it.

---

## 4. Accessibility

### 4.1 Icon links have no accessible name
Social links in `ConnectWithMeCard.js` and nav icons pair an SVG with text —
mostly OK — but standalone icon buttons (print/PDF in CV, theme toggle) should
have `aria-label`. Verify `ThemeColorSchemeToggleButton`.

### 4.2 External link `rel`
Many `target="_blank"` links use `rel="noopener"` but some omit it; add
`rel="noopener noreferrer"` consistently. `mailto:` links don't need
`target="_blank"` (`page.js:52`, `ConnectWithMeCard.js:25`).

### 4.3 Color-only meaning
Techstack dots and the work-availability dot convey state by color alone.
The availability card has a text label (good); the techstack dots are purely
decorative — fine, but ensure they aren't the only differentiator anywhere.

### 4.4 Animated hero respects reduced motion?
`app/Title.js` auto-cycles every 5s with motion. Honor
`prefers-reduced-motion` (pause the interval / disable the y-translate) for
users who opt out.

---

## 5. Design / polish

- **Hero spacing**: `Title` uses fixed `h-[120px]`/`h-[140px]`; verify long
  strings ("working on beautiful websites") don't clip at edge breakpoints.
- **Availability card** (`page.js:52`) is a strong, tasteful touch — keep it,
  maybe surface it higher on the page.
- **Consistent card hover**: hover states are well-defined in `globals.css`;
  the home techstack/social cards could share the same hover affordance for
  cohesion.
- **`<head>` additions**: `theme-color` meta (light/dark), `apple-touch-icon`,
  and a web manifest for installability.

---

## Quick-win checklist (do these first)

- [ ] Replace placeholder root `title`/`description`, add `metadataBase` + title template — `app/layout.js`
- [ ] Add `generateMetadata` to about / projects / project[id] / cv
- [ ] Add `app/opengraph-image.png` + `app/robots.js`
- [ ] Fix duplicate `__html` key — `app/page.js`
- [ ] Replace "abc abc abc" alt + fix "gramatically" typo
- [ ] Rewrite homepage hero subtitle with a real value proposition
- [ ] Trim `HomeTechstack` to core stack
- [ ] Add social + RSS links to the footer; add RSS `<link>` to `<head>`
