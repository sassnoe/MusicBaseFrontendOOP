// const endpoint = `https://codequest-node.azurewebsites.net/`;
import Album from "./model/album.js";
import Artist from "./model/artist.js";
import Track from "./model/track.js";

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

async function getArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const objects = await response.json();
  console.log(objects);
  //   console.log(req);
  const artistsList = objects.map((jsonObj) => new Artist(jsonObj));
  console.log(artistsList);
  return artistsList;
}

async function getAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const objects = await response.json();
  //   console.log(req);
  const albumsList = objects.map((jsonObj) => new Album(jsonObj));
  // console.log(albumsList);
  return albumsList;
}

async function getTracks() {
  const response = await fetch(`${endpoint}/tracks`);
  const objects = await response.json();
  const trackList = objects.map((jsonObj) => new Track(jsonObj));

  return trackList;
}

async function createArtist(artistObj) {
  // console.log("artist obj",artistObj);
  const artistToCreate = new Artist(artistObj);
  const artistJSON = JSON.stringify(artistToCreate);
  console.log("THIS ARTIST IS ABOUT TO GET CREATED:", artistJSON);
}
async function createTrack(artistObj) {
  console.log("artist obj", artistObj);
  const artistToCreate = new Track(artistObj);
  const artistJSON = JSON.stringify(artistToCreate);
  console.log("THIS ARTIST IS ABOUT TO GET CREATED:", artistJSON);
}
async function updateTrack(trackObj) {
  console.log("artist obj", trackObj);
  const trackToCreate = new Track(trackObj);
  const trackJSON = JSON.stringify(trackToCreate);
  console.log("THIS TRACK IS ABOUT TO GET UPDATE:", trackJSON);
}
async function updateAlbum(trackObj) {
  console.log("artist obj", trackObj);
  const trackToCreate = new Album(trackObj);
  const trackJSON = JSON.stringify(trackToCreate);
  console.log("THIS TRACK IS ABOUT TO GET UPDATE:", trackJSON);
}
async function updateArtist(trackObj) {
  console.log("artist obj", trackObj);
  const trackToCreate = new Artist(trackObj);
  const trackJSON = JSON.stringify(trackToCreate);
  console.log("THIS TRACK IS ABOUT TO GET UPDATE:", trackJSON);
}
async function createAlbum(artistObj) {
  console.log("artist obj", artistObj);
  const artistToCreate = new Album(artistObj);
  const artistJSON = JSON.stringify(artistToCreate);
  console.log("THIS ARTIST IS ABOUT TO GET CREATED:", artistJSON);
}

export { createTrack, createArtist, createAlbum, getArtists, getAlbums, getTracks, searchDatabase, findAlbumsByArtist, findTracksByAlbum, 
  updateArtist, updateTrack, updateAlbum };
