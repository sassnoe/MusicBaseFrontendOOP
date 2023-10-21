import ItemRenderer from "./itemrenderer.js";

export default class TrackRenderer extends ItemRenderer {
  render(track) {
    const html = /*HTML*/ `
    <td>${track.title}</td>
    <td>${track.artistName}</td>
    <td>${track.duration}</td>`;

    return super.render(html, track._id);
  }
}
