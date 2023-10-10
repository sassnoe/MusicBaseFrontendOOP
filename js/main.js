import { getArtists, getAlbums } from "./http.js";
import ListRenderer from "./view/listrenderer.js";
import ArtistRenderer from "./view/rendererArtist.js";
import AlbumRenderer from "./view/rendererAlbum.js";

window.addEventListener("load", initApp);

let artists = [];
let artistsList;

let albums = [];
let albumsList;  

async function initApp() {
  console.log("Siden kører.");

  artists = await getArtists();
  albums = await getAlbums();
  initView();
}

function initView() {
  artistsList = new ListRenderer(artists, "#artists-table tbody", ArtistRenderer);
  console.log(artistsList);
  artistsList.render();

  albumsList = new ListRenderer(albums, "#albums-table tbody", AlbumRenderer);
  albumsList.render();
}
