import Dialog from "../general-dialogs/dialog-super.js";

import CreateItemRenderer from "../general-dialogs/dialog-items.js";
import DetailsDialog from "../general-dialogs/dialog-detail.js";
import CreateDialog from "../general-dialogs/dialog-create.js";
class AlbumDetails extends CreateItemRenderer {
  render(albumToShow) {
    const html = /*html*/ `
    <p>${albumToShow.title}</p>
    <p>${albumToShow.releaseYear}</p>
    <p>${albumToShow.artistName}</p>
    `;
    return super.render(html, "update");
  }
}

class AlbumCreate extends CreateItemRenderer {
  render() {
    const html = /*html*/ `
    <label for="title">Title</label>
    <input type="text" name="name">
    <label for="releaseYear">Release year</label>
    <input type="number" name="releaseYear">
    <label for="albumName">Album name</label>
    <input type="text" name="albumName">
    <label for="artistID">Artist name</label>
    <select name="artistID"></select>
    `;

    return super.render(html);
  }
  submit(form) {
    return [{ title: form.title.value, releaseYear: form.releaseYear.value, albumName: form.albumName.value }, "albums"];
  }
}

class AlbumUpdate extends CreateItemRenderer {
  render(album) {
    const html = /*html*/ `
    <label for="title">Title</label>
    <input type="text" name="title" value="${album.title}">
    <label for="releaseYear">Release year</label>
    <input type="number" name="releaseYear" value="${album.releaseYear}">
        <label for="artistName">Artist name</label>
    <input type="text" name="artistName" value="${album.artistName}">
    `;
    return super.render(html, "update");
  }
  submit(form) {
    return [{ title: form.title.value, releaseYear: form.releaseYear.value, artistName: form.artistName.value }, "album"];
  }
}

class AlbumDelete extends CreateItemRenderer {
  render() {
    const html = /*html*/ ``;
  }
}

export { AlbumCreate, AlbumUpdate, AlbumDelete, AlbumDetails };
