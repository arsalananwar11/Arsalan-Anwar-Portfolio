export const getImageURL = (path) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path; // external URL
  if (path.startsWith("/")) return path; // public/ asset or root-relative
  return new URL(`../assets/${path}`, import.meta.url).href; // src/assets/
};
