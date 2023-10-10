import { getArtists } from "./http.js";
import ListRenderer from "./view/listrenderer.js";
import ArtistRenderer from "./view/rendererArtist.js";

window.addEventListener("load", initApp);

let artists = [];
let artistsList;

async function initApp() {
  console.log("Siden kører.");

  artists = await getArtists();
  initView();
}

function initView() {
  artistsList = new ListRenderer(artists, "#artists-table tbody", ArtistRenderer);
  console.log(artistsList);
  artistsList.render();
}
