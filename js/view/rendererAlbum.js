import ItemRenderer from "./itemrenderer.js";

export default class AlbumRenderer extends ItemRenderer {
  render(album) {
    const html = /*HTML*/ `

    <td>${album.title}</td>
    <td>${album.artist}</td>
    <td>${album.releaseYear}</td>
    `;

    return super.render(html);
    // return html;
  }
}
