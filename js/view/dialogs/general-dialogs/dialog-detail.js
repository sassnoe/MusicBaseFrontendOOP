import Dialog from "./dialog-super.js";
import {updateClicked} from "../../../main.js"

export default class DetailsDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  // render(detailRenderer, elementToShow) {
  //   super.render(detailRenderer,elementToShow)
  //   // this.detailRenderer = new detailRenderer();
  //   // const html = this.detailRenderer.render(elementToShow);
  //   // console.log(this.dialog);
  //   // this.dialog.innerHTML = html
  //   // this.dialog.querySelector(".button-close").addEventListener("click", this.close.bind(this));
  //   // this.dialog.querySelector("form").addEventListener("submit", this.submit.bind(this));
  //   // this.show();
  // }

  submit(event){
    event.preventDefault()
    updateClicked(this.name, this.elementToShow)
  }
}
