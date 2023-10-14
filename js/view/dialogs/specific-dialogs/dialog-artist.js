
import Dialog from "../general-dialogs/dialog-SUPER.js"

import CreateItemRenderer from "../general-dialogs/dialog-items.js";
import DialogDetails from "../general-dialogs/dialog-detail.js";
import CreateDialog from "../general-dialogs/dialog-create.js";

class ArtistDetails extends DialogDetails {
  render() {
    const html = /*html*/ ``;
  }
}

class ArtistCreate extends CreateDialog {
  render() {
    const html = /*html*/ `
    <label for="name">Name</label>
    <input type="text" name="name">
    <label for="birthdate">Birthdate</label>
    <input type="text" name="birthdate">
    `;

    return CreateItemRenderer.render(html)
  }
  submit(form) {
    return { name: form.name.value, genre: form.genre.value, image: form.image.value, description: form.description.value };
  }
}

class ArtistUpdate extends Dialog {
  render() {
    const html = /*html*/ ``;
  }
  submit() {
    const form = this.dialog.querySelector("form");
    this.artist = new Artist({
      name: form.name.value,
      genre: form.genre.value,
      image: form.image.value,
      description: form.description.value,
    });

    form.reset();
  }
}

class ArtistDelete extends Dialog {
  render() {
    const html = /*html*/ ``;
  }
}

export { ArtistCreate, ArtistUpdate, ArtistDelete, ArtistDetails };
