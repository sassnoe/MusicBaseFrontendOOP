// const endpoint = `https://codequest-node.azurewebsites.net/`;
import Albums from "./model/albums.js";
import Artists from "./model/artists.js";
import Tracks from "./model/tracks.js";

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
async function getArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const objects = await response.json();
  //   console.log(req);
  const artistsList = objects.map((jsonObj) => new Artists(jsonObj));
  console.log(artistsList);
  return artistsList
}

async function getAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const objects = await response.json();
  //   console.log(req);
  const albumsList = objects.map((jsonObj) => new Albums(jsonObj));
  // console.log(albumsList);
  return albumsList;
}

async function getTracks() {
  const response = await fetch(`${endpoint}/tracks`);
  const objects = await response.json();
  const trackList = objects.map((jsonObj) => new Tracks(jsonObj))
  
  return trackList;
}

// export { getArtists, getAlbums, getTracks };
