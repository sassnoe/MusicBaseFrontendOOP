// const endpoint = `https://codequest-node.azurewebsites.net/`;
import Artists from "./model/artists.js";

const port = 3333;
const endpoint = `http://localhost:${port}`;

async function getArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const objects = await response.json();
  //   console.log(req);
  const artistsList = objects.map((jsonObj) => new Artists(jsonObj));
  console.log(artistsList);
  return artistsList;
}

export { getArtists };
