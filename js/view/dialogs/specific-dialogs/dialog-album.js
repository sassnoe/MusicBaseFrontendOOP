import Dialog from "../general-dialogs/dialog-super.js";

import CreateItemRenderer from "../general-dialogs/dialog-items.js";
import DetailsDialog from "../general-dialogs/dialog-detail.js";
import CreateDialog from "../general-dialogs/dialog-create.js";
class AlbumDetails extends DetailsDialog {
  render() {
    const html = /*html*/ ``;
  }
}

class AlbumCreate extends CreateDialog {
  render() {
    const html = /*html*/ `
    <label for="title">Title</label>
    <input type="text" name="name">
    <label for="releaseYear">Release year</label>
    <input type="text" name="releaseYear">
    <label for="artistName">Artist name</label>
    <input type="text" name="artistName">
    `;

    return CreateItemRenderer.render(html);
  }
  submit(form) {
    return [{ title: form.title.value, releaseYear: form.releaseYear.value, artistName: form.artistName.value }, "album"];
  }
}

class AlbumUpdate extends Dialog {
  render() {
    const html = /*html*/ ``;
  }
  submit() {
    const form = this.dialog.querySelector("form");
    this.Album = new Album({
      name: form.name.value,
      genre: form.genre.value,
      image: form.image.value,
      description: form.description.value,
    });

    form.reset();
  }
}

class AlbumDelete extends Dialog {
  render() {
    const html = /*html*/ ``;
  }
}

export { AlbumCreate, AlbumUpdate, AlbumDelete, AlbumDetails };
