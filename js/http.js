// const endpoint = `https://codequest-node.azurewebsites.net/`;
import Artists from "./model/artists.js";

const port = 3333;
const endpoint = `http://localhost:${port}`;

async function searchDatabase(whereToSearch, searchValue) {
  const response = await fetch(`${endpoint}/${whereToSearch}/search?q=${searchValue}`);
  const tracksData = await response.json();

  if (tracksData.tracks) {
    for (const track of tracksData.tracks) {
      track.durationSeconds = secondsToMinutesAndSeconds(track.durationSeconds);
    }
  }
  return tracksData;
}

async function findAlbumsByArtist(whereToSearch, searchID) {
  const response = await fetch(`${endpoint}/${whereToSearch}/search/${searchID}`);
  return await response.json();
}

async function findTracksByAlbum(whereToSearch, searchID) {
  const response = await fetch(`${endpoint}/${whereToSearch}/${searchID}`);
  const tracksData = await response.json();
  for (const track of tracksData.tracks) {
    track.durationSeconds = secondsToMinutesAndSeconds(track.durationSeconds);
  }
  return tracksData;
}

export { searchDatabase, findAlbumsByArtist, findTracksByAlbum };

// async function getArtists() {
//   const response = await fetch(`${endpoint}/artists`);
//   const objects = await response.json();
//   //   console.log(req);
//   const artistsList = objects.map((jsonObj) => new Artists(jsonObj));
//   console.log(artistsList);
//   return artistsList;
// }

// export { getArtists };
