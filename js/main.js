import { getArtists, getAlbums, getTracks } from "./http.js";
import ListRenderer from "./view/listrenderer.js";
import ArtistRenderer from "./view/rendererArtist.js";
import AlbumRenderer from "./view/rendererAlbum.js";
import TrackRenderer from "./view/rendererTracks.js";
import { ArtistCreate, ArtistUpdate, ArtistDelete, ArtistDetails } from "./view/dialogs/specific-dialogs/dialog-artist.js";
import { AlbumCreate, AlbumUpdate, AlbumDelete, AlbumDetails } from "./view/dialogs/specific-dialogs/dialog-album.js";
import { TrackCreate, TrackUpdate, TrackDelete, TrackDetails } from "./view/dialogs/specific-dialogs/dialog-track.js";
import CreateDialog from "./view/dialogs/general-dialogs/dialog-create.js";
import DetailsDialog from "./view/dialogs/general-dialogs/dialog-detail.js";
import UpdateDialog from "./view/dialogs/general-dialogs/dialog-update.js";
import DeleteDialog from "./view/dialogs/general-dialogs/dialog-delete.js";

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
let detailDialog;

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
  artistsList = new ListRenderer(artists, "#artists-table", ArtistRenderer, getArtists);
  console.log(artistsList);
  artistsList.render();

  albumsList = new ListRenderer(albums, "#albums-table", AlbumRenderer, getAlbums);
  albumsList.render();

  tracksList = new ListRenderer(tracks, "#tracks-table", TrackRenderer, getTracks);
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

async function itemClicked(item, name) {
  console.log("item", item);
  console.log("name", name);
  let detailRenderer = name == "#artists" ? ArtistDetails : name == "#tracks" ? TrackDetails : AlbumDetails;

  console.log(detailRenderer);
  let matchingInfo = await detailDialog.getAssociatedEntries(detailRenderer, item);
  console.log("FOUND?", matchingInfo.length);
  if (matchingInfo.length == 0) {
    matchingInfo = item;
  }
  detailDialog.render(detailRenderer, matchingInfo);
  // const idToLookFor = event.target.parentElement.id;
  // const whereToLook = event.target.parentElement.parentElement.id.split("-")[0];

  // const correctList = allLists.get(whereToLook);
  // const entryToUse = correctList._list.find((ele) => ele._id == idToLookFor);
}

function initDialogs(params) {
  updateDialog = new UpdateDialog("update");
  createDialog = new CreateDialog("create");
  deleteDialog = new DeleteDialog("delete");
  detailDialog = new DetailsDialog("details");
}

function createNewClicked(event) {
  const thingToCreate = event.target.id.split("-")[1];

  let additionalList;
  let renderer;
  if (thingToCreate == "artist") {
    renderer = ArtistCreate;
  } else if (thingToCreate == "track") {
    renderer = TrackCreate;
    additionalList = [artists, albums];
  } else {
    renderer = AlbumCreate;
    additionalList = artists;
  }

  createDialog.render(renderer, undefined, additionalList);
}

function updateClicked(classObj, item) {
  let renderer;
  let additionalList = undefined;
  if (classObj.name.includes("Album")) {
    renderer = AlbumUpdate;
    additionalList = artists;
  } else if (classObj.name.includes("Track")) {
    renderer = TrackUpdate;
    additionalList = [artists, albums];
  } else if (classObj.name.includes("Artist")) {
    renderer = ArtistUpdate;
  } else {
    console.error("INCORRECT CLASSOBJ THINGY (look in update clicked)");
  }
  updateDialog.render(renderer, item, additionalList);
}

async function refreshList(whichOne) {
  console.log("which one?", whichOne);
  const correctList = allLists.get(whichOne);
  if (correctList !== undefined)
{  await correctList.refreshList()
  correctList.render()}
  else {console.error("Couldn't find the right list to update!!!");}
}

export { itemClicked, updateClicked, refreshList };