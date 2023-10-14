import Dialog from "./dialog-super.js";

export default class DialogDetails extends Dialog {
  constructor(id) {
    super(id);
  }

  render(detailRenderer, elementToShow) {
    this.detailRenderer = detailRenderer;
    this.dialog.innerHTML = "";
    const html = detailRenderer.render(elementToShow);
    this.dialog.insertAdjacentHTML("beforeend", html);
    this.dialog.querySelector(".close-btn").addEventListener("click", this.close.bind(this));
    this.show();
  }
}
