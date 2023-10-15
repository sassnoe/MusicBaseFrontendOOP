import Dialog from "../general-dialogs/dialog-super.js";

import CreateItemRenderer from "../general-dialogs/dialog-items.js";
import DetailsDialog from "../general-dialogs/dialog-detail.js";
import CreateDialog from "../general-dialogs/dialog-create.js";

class ArtistDetails extends CreateItemRenderer {
  render(artistToShow) {
    const html = /*html*/ `
    <p>${artistToShow.name}</p>
    <p>${artistToShow.birthdate}</p>
    `;
    return super.render(html, "update")
  }
}

class ArtistCreate extends CreateItemRenderer {
  render() {
    const html = /*html*/ `
    <label for="name">Name</label>
    <input type="text" name="name" required="true">
    <label for="birthdate">Birthdate</label>
    <input type="date" name="birthdate"  required="true">
    `;

    return super.render(html);
  }
  submit(form) {
    return [{ name: form.name.value, birthdate: form.birthdate.value }, "artists"];
  }
}

class ArtistUpdate extends CreateItemRenderer {
  render(artistData) {
        const html = /*html*/ `
    <label for="name">${artistData.name}</label>
    <input type="text" name="name" value="${artistData.name}">
    <label for="birthdate">${artistData.name}</label>
    <input type="date" name="birthdate" value="${artistData.birthdate}">
    `;

        return super.render(html);
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

class ArtistDelete extends CreateItemRenderer {
  render() {
    const html = /*html*/ ``;
  }
}

export { ArtistCreate, ArtistUpdate, ArtistDelete, ArtistDetails };
