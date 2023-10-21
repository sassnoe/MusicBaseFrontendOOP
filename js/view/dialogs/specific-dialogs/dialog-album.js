import { findTracksByAlbum } from "../../../http.js";
import CreateItemRenderer from "../general-dialogs/dialog-items.js";

class AlbumDetails extends CreateItemRenderer {
  render(albumToShow) {
    let trackString = "";
    if (albumToShow.tracks.length>0)
    { trackString = `<p>Tracks on this album:</p>`;
      albumToShow.tracks.forEach((track) => (trackString += `<li>${track.title} - ${track.duration}</li>`));}
    const html = /*html*/ `
    <p>Title - ${albumToShow.title}</p>
    <p>Made by - ${albumToShow.artist}</p>
    <p>Released in - ${albumToShow.releaseYear}</p>
    ${trackString}
    `;
    const html2 =super.render(html, "update");
    return super.addDelete(html2)
  }

  static async getItems(album) {
    return await findTracksByAlbum(album._id);
  }
}

class AlbumCreate extends CreateItemRenderer {
  render() {
    const html = /*html*/ `

    <label for="title">Album name</label>
    <input type="text" name="title">
    <label for="releaseYear">Release year</label>
    <input type="number" name="releaseYear">
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
    return super.render(html, "update");
  }
  submit(form) {
    return [{ title: form.title.value, releaseYear: form.releaseYear.value, artistID: form.artistID.value }, "albums"];
  }
  fillList(artistAndAlbumArray, select, extraInfo) {
    super.fillList(artistAndAlbumArray, select.querySelector("#artistID"));
  }
}

class AlbumDelete extends CreateItemRenderer {
  render(album) {
    return super.deleteText(album, "album");
  }

  submit(form){
    return [form.id.value, "albums"]
  }
}

export { AlbumCreate, AlbumUpdate, AlbumDelete, AlbumDetails };
