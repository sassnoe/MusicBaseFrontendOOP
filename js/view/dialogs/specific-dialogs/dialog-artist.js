import { findAlbumsByArtist } from "../../../http.js";
import CreateItemRenderer from "../general-dialogs/dialog-items.js";

class ArtistDetails extends CreateItemRenderer {
  render(artistAndMaybeAlbums) {
    console.log(artistAndMaybeAlbums);
    // console.log("this is what artist details shows", artistToShow);
    let albumString = "";
    if (artistAndMaybeAlbums instanceof Array) {
      albumString += "<p>Albums made:</p>";
      artistAndMaybeAlbums.forEach((entry) => (albumString += `<li>${entry.title} - released in ${entry.releaseYear}</li>`));
    }
    const html = /*html*/ `
    <p>${artistAndMaybeAlbums.name}</p>
    <p>Born in ${artistAndMaybeAlbums.birthdate}</p>
    
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
    console.log("@@@@@@@@@@", artistData);
    const html = /*html*/ `
    <label for="name">${artistData.name}</label>
    <input type="text" name="name" value="${artistData.name}">
    <label for="birthdate">Date of birth</label>
    <input type="date" name="birthdate" value="${artistData.birthdate}">
    `;

    return super.render(html, "update");
  }
  submit(form) {
    return [{ name: form.name.value, birthdate: form.birthdate.value }, "artists"];
  }
}

class ArtistDelete extends CreateItemRenderer {
  render() {
    const html = /*html*/ ``;
  }
}

export { ArtistCreate, ArtistUpdate, ArtistDelete, ArtistDetails };
