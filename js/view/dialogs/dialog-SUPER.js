export default class Dialog {
  constructor(id) {
    this.dialog = document.createElement("dialog");
    this.dialog.id = id;
    document.querySelector("main").appendChild(this.dialog);
  }

  show() {
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
  }
}
