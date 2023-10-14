import Dialog from "./dialog-super.js";

export default class DetailsDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  render(detailRenderer, elementToShow) {
    this.detailRenderer = new detailRenderer();
    const html = this.detailRenderer.render(elementToShow);
    console.log(this.dialog);
    this.dialog.innerHTML = html
    // this.dialog.querySelector(".close-btn").addEventListener("click", this.close.bind(this));
    this.show();
  }
}
