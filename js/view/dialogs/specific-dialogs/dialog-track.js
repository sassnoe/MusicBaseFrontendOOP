import CreateItemRenderer from "../general-dialogs/dialog-items.js";

class TrackDetails extends CreateItemRenderer {
  render() {
    const html = /*html*/ ``;
  }
}

class TrackCreate extends CreateItemRenderer {
  render() {
    const html = /*html*/ `
    <label for="title">Title</label>
    <input type="text" name="title">
    <label for="duration">Duration</label>
    <input type="time" name="duration">
    <label for="artistName">Artist name</label>
    <input type="text" name="artistName">
    `;

    return super.render(html);
  }
  submit(form) {
    return [{ title: form.title.value, durationSeconds: form.duration.value }, "track"];
  }
}

class TrackUpdate extends CreateItemRenderer {
  render(track) {
    const html = /*html*/ `
    <label for="title">Title</label>
    <input type="text" name="title" value="${track.title}">
    <label for="duration">Duration</label>
    <input type="time" name="duration" value="${track.durationSeconds}">
        <label for="artistName">Artist name</label>
    <input type="text" name="artistName" value="${track.artistName}">
    `;
      return super.render(html, "update");
  }
  submit() {
    const form = this.dialog.querySelector("form");
    this.Track = new Track({
      name: form.name.value,
      genre: form.genre.value,
      image: form.image.value,
      description: form.description.value,
    });

    form.reset();
  }
}

class TrackDelete extends CreateItemRenderer {
  render() {
    const html = /*html*/ ``;
  }
}

export { TrackCreate, TrackUpdate, TrackDelete, TrackDetails };
