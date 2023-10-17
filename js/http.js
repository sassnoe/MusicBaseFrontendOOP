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

async function findAlbumsByArtist(artistID) {

  const response = await fetch(`${endpoint}/albums/search/${artistID}`);

  // const response = await fetch(`${endpoint}/${whereToSearch}/search/${searchID}`);
  return await response.json();
}

async function findTracksByAlbum(albumID) {
  const response = await fetch(`${endpoint}/albums/${albumID}`);
  // const response = await fetch(`${endpoint}/${whereToSearch}/${searchID}`);
  let tracksData = await response.json();
  console.log(tracksData);
  tracksData.tracks = tracksData.tracks.map((track) => new Track(track));
  console.log(tracksData);
  return tracksData;
}

async function getTrackDetails(trackTitle) {
  console.log("TRACK TITLE:", trackTitle);
  const response = await fetch(`${endpoint}/tracks/search?q=${trackTitle}`);
  const responseObj = await response.json();
  console.log(responseObj);
  const trackInfo = (responseObj.track = new Track({
    title: responseObj[0].title,
    durationSeconds: responseObj[0].durationSeconds,
    artistName: responseObj[0].artistName,
    artistID: responseObj.map((entry) => {
      return entry.artistID;
    }),
    albumID: responseObj.map((entry) => {
      return entry.albumID;
    }),
    albumTitle: responseObj.map((entry) => {
      return entry.albumTitle;
    }),
    id: responseObj[0].id,
  }));
  return await trackInfo;
}

async function getArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const objects = await response.json();
  console.log("RAW ARTISTS", objects);
  //   console.log(req);
  const artistsList = objects.map((jsonObj) => new Artist(jsonObj));
  return artistsList;
}

async function getAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const objects = await response.json();
  console.log("RAW ALBUMS", objects);
  const albumsList = objects.map((jsonObj) => new Album(jsonObj));
  // console.log(albumsList);
  return albumsList;
}

async function getTracks() {
  const response = await fetch(`${endpoint}/tracks`);
  const objects = await response.json();
  console.log("RAW TRACKS", objects);
  const trackList = objects.map((jsonObj) => new Track(jsonObj));

  return trackList;
}

async function createElement(obj, whereToPost) {
  console.log("artist obj", obj);
  const elementToCreate = whereToPost == "tracks" ? new Track(obj) : whereToPost == "albums" ? new Album(obj) : new Artist(obj);
  console.log("about to create this element!", JSON.stringify(elementToCreate));
  const response = await fetch(`${endpoint}/${whereToPost}`, {
    method: "POST",
    body: JSON.stringify(elementToCreate),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  return response.ok;
}

async function updateElement(obj, whereToPost) {
  console.log("artist obj", obj);
  const elementToCreate = whereToPost == "tracks" ? new Track(obj) : whereToPost == "albums" ? new Album(obj) : new Artist(obj);
  // const elementToJSON = JSON.stringify(elementToCreate);
  // console.log("THIS THINGY IS ABOUT TO GET CREATED:", elementToJSON);
  const response = await fetch(`${endpoint}/${whereToPost}`, {
    method: "POST",
    body: JSON.stringify(elementToCreate),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  return response.ok;
}

export { getTrackDetails, updateElement, createElement, getArtists, getAlbums, getTracks, searchDatabase, findAlbumsByArtist, findTracksByAlbum };
