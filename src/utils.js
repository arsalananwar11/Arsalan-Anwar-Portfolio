export const getImageURL = (path) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(`../assets/${path}`, import.meta.url).href;
};
