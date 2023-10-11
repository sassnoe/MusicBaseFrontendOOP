import { getArtists, getAlbums, getTracks } from "./http.js";
import ListRenderer from "./view/listrenderer.js";
import ArtistRenderer from "./view/rendererArtist.js";
import AlbumRenderer from "./view/rendererAlbum.js";
import TrackRenderer from "./view/rendererTracks.js"

window.addEventListener("load", initApp);

let artists = [];
let artistsList;

let albums = [];
let albumsList;  

let tracks = [];
let tracksList; 

async function initApp() {
  console.log("Siden kører.");

  artists = await getArtists();
  albums = await getAlbums();
  tracks = await getTracks();
  initView();
}

function initView() {
  artistsList = new ListRenderer(artists, "#artists-table tbody", ArtistRenderer);
  console.log(artistsList);
  artistsList.render();

  albumsList = new ListRenderer(albums, "#albums-table tbody", AlbumRenderer);
  albumsList.render();

  tracksList = new ListRenderer(tracks, "#tracks-table tbody", TrackRenderer);
  tracksList.render();
}
