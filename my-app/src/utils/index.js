export function getIdFromURL(url) {
  const splitURL = url.split("/");
  const id = splitURL[splitURL.length - 2];

  return id;
}
