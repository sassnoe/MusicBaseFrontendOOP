import ItemRenderer from "./itemrenderer.js";

export default class ArtistRenderer extends ItemRenderer {
  render(artist) {
    const html = /*HTML*/ `
    
    <td>${artist.name}</td>
    <td>${artist.birthdate}</td>
    `;
    
    return super.render(html)
    // return html;
  }
}
