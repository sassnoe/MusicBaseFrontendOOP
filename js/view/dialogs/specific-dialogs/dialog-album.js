import { findTracksByAlbum } from "../../../http.js";
import CreateItemRenderer from "../general-dialogs/dialog-items.js";

class AlbumDetails extends CreateItemRenderer {
  render(albumToShow) {
    let trackString = "";
    albumToShow.tracks.forEach((track) => (trackString += `<li>${track.title} - ${track.duration}</li>`));
    const html = /*html*/ `
    <h3>Album title - ${albumToShow.title}</h3>
    <p>Made by - ${albumToShow.artist}</p>
    <p>Released in - ${albumToShow.releaseYear}</p>
    <p>Tracks on this album:</p>
    ${trackString}
    `;

    return super.render(html, "update");
  }

  static async getItems(album) {
    return await findTracksByAlbum(album._id);
  }
}

class AlbumCreate extends CreateItemRenderer {
  render() {
    const html = /*html*/ `
    <label for="title">Title</label>
    <input type="text" name="title">
    <label for="releaseYear">Release year</label>
    <input type="number" name="releaseYear">
    <label for="albumName">Album name</label>
    <input type="text" name="albumName">
    <label for="artistID">Name of artist</label>
    <select name="artistID" id="artistID"></select>
        `;
    //         <label for="check">Do you wish to add tracks as well?</label>
    // <input type="checkbox" name="check">

    return super.render(html);
  }

  fillList(artistAndAlbumArray, select, extraInfo) {
    super.fillList(artistAndAlbumArray, select.querySelector("#artistID"));
  }
  submit(form) {
    return [{ title: form.title.value, releaseYear: form.releaseYear.value, artistID: form.artistID.value }, "albums"];
  }
}

class AlbumUpdate extends CreateItemRenderer {
  render(album) {
    const html = /*html*/ `
    <label for="title">Title</label>
    <input type="text" name="title" value="${album.title}">
    <label for="releaseYear">Release year</label>
    <input type="number" name="releaseYear" value="${album.releaseYear}">
        <label for="artistID">Name of artist</label>
    <select name="artistID" id="artistID"></select>
    `;
    console.log(album);
    return super.render(html, "update");
  }
  submit(form) {
    return [{ title: form.title.value, releaseYear: form.releaseYear.value, artistID: form.artistID.value }, "album"];
  }
  fillList(artistAndAlbumArray, select, extraInfo) {
    super.fillList(artistAndAlbumArray, select.querySelector("#artistID"));
  }
}

class AlbumDelete extends CreateItemRenderer {
  render() {
    const html = /*html*/ ``;
  }
}

export { AlbumCreate, AlbumUpdate, AlbumDelete, AlbumDetails };
