export default class Dialog {
  constructor(id) {
        this.dialog.id = id;
        this.dialog = document.createElement("dialog");
        document.querySelector("main").insertAdjacentHTML("beforeend", this.dialog);
  }

  show() {
    this.dialog.showModal();
  }
}