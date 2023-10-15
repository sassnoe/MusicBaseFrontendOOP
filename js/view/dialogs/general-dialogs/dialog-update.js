import Dialog from "./dialog-super.js";
import { updateSomething } from "../../../main.js";

// REPLACE @@@@@@@@@@@@@@@@@@@
export default class UpdateDialog extends Dialog {
  constructor(id) {
    super(id);
  }

//   render(createToShow) {
//     this.creater = new createToShow();
//     console.log("creater:", this.creater);
//     const html = this.creater.render();
//     this.dialog.innerHTML = html;
//     this.dialog.querySelector("form").addEventListener("submit", this.submit.bind(this));
//     this.dialog.querySelector(".button-close").addEventListener("click", this.close.bind(this));
//     this.show();
//   }

  submit(event) {
    super.submit(event)
    updateSomething(this.submitObj, this.where);
  }
}
