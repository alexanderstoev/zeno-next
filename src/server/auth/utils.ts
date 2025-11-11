export const slugify = (input: string): string => {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove non-word characters
    .replace(/[\s_-]+/g, "-") // collapse whitespace/underscores/dashes
    .replace(/^-+|-+$/g, ""); // trim leading/trailing dashes
};
