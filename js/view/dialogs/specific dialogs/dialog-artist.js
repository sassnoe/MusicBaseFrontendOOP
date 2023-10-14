import Dialog from "../dialog-SUPER";
import { CreateItemRenderer } from "../general-dialogs/dialog-create.js";

export class ArtistDetails extends Dialog {
  render() {
    const html = /*html*/ ``;
  }
}
export class ArtistCreate extends Dialog {
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

export class ArtistUpdate extends Dialog {
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

export class ArtistDelete extends Dialog {
  render() {
    const html = /*html*/ ``;
  }
}
