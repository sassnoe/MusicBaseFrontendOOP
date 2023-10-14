import { getArtists, getAlbums, getTracks } from "./http.js";
import ListRenderer from "./view/listrenderer.js";
import ArtistRenderer from "./view/rendererArtist.js";
import AlbumRenderer from "./view/rendererAlbum.js";
import TrackRenderer from "./view/rendererTracks.js";
import CreateDialog from "./view/dialogs/general-dialogs/dialog-create.js";

window.addEventListener("load", initApp);

let artists = [];
let artistsList;

let albums = [];
let albumsList;

let tracks = [];
let tracksList;

const allLists = new Map();

let createDialog;
let deleteDialog;
let updateDialog;

async function initApp() {
  addEventListeners();
  console.log("Siden kører.");

  artists = await getArtists();
  albums = await getAlbums();
  tracks = await getTracks();
  initView();
  initDialogs();
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
  document.querySelectorAll(".create-btn").forEach((btn) => btn.addEventListener("click", createNewClicked));
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

function itemClicked(item, name) {
  console.log("item", item);
  console.log("name", name);

  // const idToLookFor = event.target.parentElement.id;
  // const whereToLook = event.target.parentElement.parentElement.id.split("-")[0];

  // const correctList = allLists.get(whereToLook);
  // const entryToUse = correctList._list.find((ele) => ele._id == idToLookFor);
}

function initDialogs(params) {
  updateDialog = new CreateDialog("update");
  createDialog = new CreateDialog("create");
  deleteDialog = new CreateDialog("delete");
}

function createNewClicked(event) {
  // console.log(event.target);
  // const thingToCreate = event.target.id.split("-")[1] + "-create";
  // console.log("THING TO CREATE:", thingToCreate);
  // const dialog = new CreateElement(thingToCreate);
  // console.log(dialog);
  createDialog.render();
}

// createNewClicked()

export { itemClicked };
