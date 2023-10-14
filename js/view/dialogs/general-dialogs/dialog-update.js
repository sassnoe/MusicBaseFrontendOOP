import Dialog from "./dialog-super.js";
import { createSomething } from "../../../main.js";

// REPLACE @@@@@@@@@@@@@@@@@@@
export default class UpdateDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  render(createToShow) {
    this.creater = new createToShow();
    console.log("creater:", this.creater);
    const html = this.creater.render();
    this.dialog.innerHTML = html;
    this.dialog.querySelector("form").addEventListener("submit", this.submit.bind(this));
    this.dialog.querySelector(".button-close").addEventListener("click", this.close.bind(this));
    this.show();
  }

  submit(event) {
    event.preventDefault();
    this.form = event.target;
    const [submitObj, where] = this.creater.submit(this.form);
    createSomething(submitObj, where);
  }
}
