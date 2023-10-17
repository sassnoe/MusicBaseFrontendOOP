import { findAlbumsByArtist } from "../../../http.js";
import CreateItemRenderer from "../general-dialogs/dialog-items.js";

class ArtistDetails extends CreateItemRenderer {
  render(artistAndAlbums) {
    console.log(artistAndAlbums);
    // console.log("this is what artist details shows", artistToShow);
    let albumString = "";
    artistAndAlbums.forEach((entry) => (albumString += `<li>Title: ${entry.title} - released in ${entry.releaseYear}</li>`));
    const html = /*html*/ `
    <p>${artistAndAlbums[0].name}</p>
    <p>Born in ${artistAndAlbums[0].birthdate}</p>
    <p>Albums made by this artist:</p>
    ${albumString}
    `;
    return super.render(html, "update");
  }
  static async getItems(artist) {
    return await findAlbumsByArtist(artist._id);
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

  fillList(artistAndAlbumArray, select) {
    super.fillList(artistAndAlbumArray[0], select.querySelector("#artistID"));
    super.fillList(artistAndAlbumArray[1], select.querySelector("#albumID"));
  }
  submit(form) {
    return [{ name: form.name.value, birthdate: form.birthdate.value }, "artists"];
  }
}

class ArtistUpdate extends CreateItemRenderer {
  render(artistData) {
    console.log("@@@@@@@@@@",artistData);
    const html = /*html*/ `
    <label for="name">${artistData[0].name}</label>
    <input type="text" name="name" value="${artistData[0].name}">
    <label for="birthdate">${artistData[0].name}</label>
    <input type="date" name="birthdate" value="${artistData[0].birthdate}">
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
