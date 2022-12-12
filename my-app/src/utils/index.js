export function getIdFromURL(url) {
  let id;

  if (url) {
    const splitURL = url.split("/");
    id = splitURL[splitURL.length - 2];
  }

  return id;
}
