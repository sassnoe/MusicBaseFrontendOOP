import Dialog from "../general-dialogs/dialog-super.js";

import CreateItemRenderer from "../general-dialogs/dialog-items.js";
import DialogDetails from "../general-dialogs/dialog-detail.js";
import CreateDialog from "../general-dialogs/dialog-create.js";
class AlbumDetails extends DialogDetails {
  render() {
    const html = /*html*/ ``;
  }
}

class AlbumCreate extends CreateDialog {
  render() {
    const html = /*html*/ `
    <label for="name">Name</label>
    <input type="text" name="name">
    <label for="birthdate">Birthdate</label>
    <input type="text" name="birthdate">
    `;

    return CreateItemRenderer.render(html);
  }
  submit(form) {
    return { name: form.name.value, genre: form.genre.value, image: form.image.value, description: form.description.value };
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
