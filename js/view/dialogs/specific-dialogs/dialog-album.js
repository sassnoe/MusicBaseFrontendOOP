import { findTracksByAlbum } from "../../../http.js";
import CreateItemRenderer from "../general-dialogs/dialog-items.js";

class AlbumDetails extends CreateItemRenderer {
  render(albumToShow) {
    let trackString = "";
    albumToShow.tracks.forEach((track) => (trackString += `<li>${track.title} - ${track.duration}</li>`));
    const html = /*html*/ `
    <p>Title - ${albumToShow.title}</p>
    <p>Made by - ${albumToShow.artist}</p>
    <p>Released in - ${albumToShow.releaseYear}</p>
    <p>Tracks on this album:</p>
    ${trackString}
    `;
    return super.render(html, "update");
  }

  static async getItems(album) {
    return await findTracksByAlbum("albums", album._id);
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
        <label for="check">Do you wish to add tracks as well?</label>
    <input type="checkbox" name="check">
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
