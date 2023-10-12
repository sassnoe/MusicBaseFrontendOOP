import { getArtists, getAlbums, getTracks } from "./http.js";
import ListRenderer from "./view/listrenderer.js";
import ArtistRenderer from "./view/rendererArtist.js";
import AlbumRenderer from "./view/rendererAlbum.js";
import TrackRenderer from "./view/rendererTracks.js";

window.addEventListener("load", initApp);

let artists = [];
let artistsList;

let albums = [];
let albumsList;

let tracks = [];
let tracksList;

  const allLists = new Map();

async function initApp() {
  addEventListeners();
  console.log("Siden kører.");

  artists = await getArtists();
  albums = await getAlbums();
  tracks = await getTracks();
  initView();
}

function initView() {
  artistsList = new ListRenderer(artists, "#artists-table", ArtistRenderer);
  console.log(artistsList);
  artistsList.render();

  albumsList = new ListRenderer(albums, "#albums-table", AlbumRenderer);
  albumsList.render();

  tracksList = new ListRenderer(tracks, "#tracks-table", TrackRenderer);
  // console.log("track list:",tracksList);
  tracksList.render();

  allLists.set("tracks", tracksList).set("albums", albumsList).set("artists", artistsList);
}

function addEventListeners(params) {
  document.querySelector("#searchBar").addEventListener("keydown", handleSearchAndFilter);
  document.querySelector("#tableSelect").addEventListener("change", handleSearchAndFilter);
}

function handleSearchAndFilter(params) {

  const searchValue = document.querySelector("#searchBar").value;
  const filterValue = document.querySelector("#tableSelect").value;

  if (filterValue == "combined") {
    allLists.forEach((list) => {
      list.search(searchValue);
      list.show();
    });
  } else {
    allLists.forEach((list) => list.hide());
    const listToShow = allLists.get(filterValue);
    listToShow.search(searchValue);
    listToShow.show();
  }
}

function itemClicked(event) {
  console.log("event", event.target.parentElement.parentElement);
  const idToLookFor = event.target.parentElement.id;
  const whereToLook = event.target.parentElement.parentElement.id.split("-")[0]
  console.log("where to look:",whereToLook);
  console.log("all lists:",allLists);
  const correctList = allLists.get(whereToLook)
  console.log(correctList);
  const entryToUse = correctList._list.find(ele => ele._id == idToLookFor)
  console.log("FOUND ENTRY:",entryToUse);
}

export { itemClicked };
