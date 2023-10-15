import CreateItemRenderer from "../general-dialogs/dialog-items.js";

class TrackDetails extends CreateItemRenderer {
  render(trackToShow) {
    const html = /*html*/ `
    <p>${trackToShow.title}</p>
    <p>${trackToShow.duration}</p>
    `;
    return super.render(html, "update");
  }
}

class TrackCreate extends CreateItemRenderer {
  render(list) {
    const html = /*html*/ `
    
    <label for="title">Title</label>
    <input type="text" name="title">
    <label for="duration">Duration</label>
    <input type="time" name="duration">
    <label for="artistId">Name of artist</label>
    <select name="artistId"></select>
    `;

    return super.render(html);
  }

//   fillList(artistList, select) {
//     artistList.forEach((artist) => {
//         select.insertAdjacentHTML("beforeend", `<option>${artist.name}</option>`)
//     });
//   }

  submit(form) {
    return [{ title: form.title.value, durationSeconds: form.duration.value, artistId: form.artistId.value }, "tracks"];
  }
}

class TrackUpdate extends CreateItemRenderer {
  render(track) {
    const html = /*html*/ `
    <label for="title">Title</label>
    <input type="text" name="title" value="${track.title}">
    <label for="duration">Duration</label>
    <input type="time" name="duration" value="${track.duration}">
        <label for="artistId">Name of artist</label>
        <select name="artistId"><option></option></select>
    `;
    return super.render(html, "update");
  }
  //   submit() {
  //     const form = this.dialog.querySelector("form");
  //     this.Track = new Track({
  //       name: form.name.value,
  //       genre: form.genre.value,
  //       image: form.image.value,
  //       description: form.description.value,
  //     });

  //     form.reset();
  //   }
}

class TrackDelete extends CreateItemRenderer {
  render() {
    const html = /*html*/ ``;
  }
}

export { TrackCreate, TrackUpdate, TrackDelete, TrackDetails };
