import Dialog from "../general-dialogs/dialog-super.js";

import CreateItemRenderer from "../general-dialogs/dialog-items.js";
import DialogDetails from "../general-dialogs/dialog-detail.js";
import CreateDialog from "../general-dialogs/dialog-create.js";

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
    `;

    return super.render(html);
  }
  submit(form) {
    return [{ title: form.title.value, durationSeconds: form.duration.value}, "track"];
  }
}

class TrackUpdate extends CreateItemRenderer {
  render() {
    const html = /*html*/ ``;
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
