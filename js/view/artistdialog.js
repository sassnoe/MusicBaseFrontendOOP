export default class ArtistDialog {
  constructor(id) {
    this.dialog.id = id;
    this.dialog = document.createElement("dialog");
    document.querySelector("main").insertAdjacentHTML("beforeend", this.dialog);
  }
  show() {
    this.dialog.showModal();
  }
  render() {
    const html = /*html*/ ``;
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
