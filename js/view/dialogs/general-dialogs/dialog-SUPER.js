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

  render(detailRenderer, elementToShow, listToInclude) {
    // console.log("LIST TO INCLUDE",listToInclude);
    this.name = detailRenderer;
    // console.log("NAME@@@@@@@@@@@@",this.name);
    this.elementToShow = elementToShow;
    this.detailRenderer = new detailRenderer();
    const html = this.detailRenderer.render(elementToShow);
    this.dialog.innerHTML = html;
    if (listToInclude) {
      this.detailRenderer.fillList(listToInclude, this.dialog, elementToShow);
    }
    this.dialog.querySelector(".button-close").addEventListener("click", this.close.bind(this));
    this.dialog.querySelector("form").addEventListener("submit", this.submit.bind(this));
    this.show();
  }

  submit(event) {
    event.preventDefault();
    this.form = event.target;
    [this.submitObj, this.where] = this.detailRenderer.submit(this.form);
  }
}
