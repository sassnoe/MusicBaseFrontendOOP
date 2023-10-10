import ItemRenderer from "./itemrenderer.js";

export default class AlbumRenderer extends ItemRenderer {
  render(album) {
    const html = /*HTML*/ `

    <td>${album.title}</td>
    <td>${album.releaseYear}</td>
    <td>${album.artist}</td>
    `;

    return super.render(html);
    // return html;
  }
}
