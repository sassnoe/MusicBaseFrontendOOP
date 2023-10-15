import Dialog from "./dialog-super.js";
import { updateSomething } from "../../../main.js";

// REPLACE @@@@@@@@@@@@@@@@@@@
export default class UpdateDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  submit(event) {
    super.submit(event)
    updateSomething(this.submitObj, this.where);
    this.close()
  }
}
