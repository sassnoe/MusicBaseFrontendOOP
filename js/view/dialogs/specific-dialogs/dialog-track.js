import CreateItemRenderer from "../general-dialogs/dialog-items.js";
import { getTrackDetails } from "../../../http.js";

class TrackDetails extends CreateItemRenderer {
  render(trackWithInfo) {
    let artistString = "";
    if (trackWithInfo.artistName instanceof Array) {
      trackWithInfo.artistName.forEach((artistName) => (artistString += artistName));
    } else {
      artistString = trackWithInfo.artistName;
    }
    let albumList = "";
    trackWithInfo.albumTitle.forEach((album) => (albumList += `<li>${album}</li>`));
    const html = /*html*/ `
    <p>${trackWithInfo.title} - ${trackWithInfo.duration}</p>
    <p>Made by ${artistString}</p>
    <p>Featured on ${trackWithInfo.albumTitle.length == 1 ? "this album:" : "these albums:"}</p>
    ${albumList}
    `;
    const html2 = super.render(html, "update");
    return super.addDelete(html2);
  }

  static async getItems(track) {
    return await getTrackDetails(track.title);
  }
}

class TrackCreate extends CreateItemRenderer {
  render(list) {
    const html = /*html*/ `
    
    <label for="title">Title</label>
    <input type="text" name="title">
    <label for="duration">Duration</label>
    <input type="time" name="duration">
    <label for="artistID">Name of artist</label>
    <select name="artistID" id="artistID"></select>
    <label for="albumID">On this album</label>
    <select name="albumID" id="albumID"></select>
    `;

    return super.render(html);
  }

  fillList(artistAndAlbumArray, select) {
    super.fillList(artistAndAlbumArray[0], select.querySelector("#artistID"));
    super.fillList(artistAndAlbumArray[1], select.querySelector("#albumID"));
  }

  submit(form) {
    return [{ title: form.title.value, albumID: form.albumID.value, durationSeconds: form.duration.value, artistID: form.artistID.value }, "tracks"];
  }
}

class TrackUpdate extends CreateItemRenderer {
  render(track) {
    const html = /*html*/ `
    <label for="title">Title</label>
    <input type="text" name="title" value="${track.title}">
    <label for="duration">Duration</label>
    <input type="time" name="duration" value="${track.duration}">
        <label for="artistID">Name of artist</label>
        <select name="artistID" id="artistID"></select>
            <label for="albumID">On this album</label>
    <select name="albumID" id="albumID"></select>
    `;
    return super.render(html, "update");
  }

  fillList(artistAndAlbumArray, select, extraInfo) {
    super.fillList(artistAndAlbumArray[0], select.querySelector("#artistID"), extraInfo.artistIds);
    super.fillList(artistAndAlbumArray[1], select.querySelector("#albumID"), extraInfo.albumIds);
  }

  submit(form) {
    return [{ title: form.title.value, albumID: form.albumID.value, durationSeconds: form.duration.value, artistID: form.artistID.value }, "tracks"];
  }
}

class TrackDelete extends CreateItemRenderer {
  render() {
    const html = /*html*/ ``;
  }
}

export { TrackCreate, TrackUpdate, TrackDelete, TrackDetails };
