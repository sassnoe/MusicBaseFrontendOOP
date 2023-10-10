import ItemRenderer from "./itemrenderer.js";

export default class ArtistRenderer extends ItemRenderer {
  render(artist) {
    const html = /*HTML*/ `
      <tr>
        <td>${artist.name}</td>
        <td>${artist.birthdate}</td>
      </tr>`;

    return html;
  }
}
