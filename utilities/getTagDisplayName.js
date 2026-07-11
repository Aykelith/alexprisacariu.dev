import TagsCustomMapping from "@/constants/TagsCustomMapping";

/**
 * Gets the display name for a tag, applying the custom mapping if present.
 *
 * @param {string} tag - the original tag name
 * @returns {string} the display name
 */
export default function getTagDisplayName(tag) {
  return TagsCustomMapping[tag] || tag;
}
