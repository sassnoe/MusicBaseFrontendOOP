import ItemRenderer from "./itemrenderer.js";

export default class AlbumRenderer extends ItemRenderer {
  render(album) {
    // console.log(album);
    const html = /*HTML*/ `

    <td>${album.title}</td>
    <td>${album.artistName}</td>
    <td>${album.releaseYear}</td>
    `;

    return super.render(html);
    // return html;
  }
}
