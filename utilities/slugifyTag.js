/**
 * Slugifies a tag for use in URLs. Lowercase, non-alphanumeric runs → "-".
 * ponytail: slug collisions merge distinct tags (e.g. "C#"/"C++"→"c").
 * Fine for current tag set; revisit if a collision appears.
 */
export default function slugifyTag(tag) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
