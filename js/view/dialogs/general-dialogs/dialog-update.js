import Dialog from "./dialog-super.js";
import { updateElement } from "../../../http.js";

// REPLACE @@@@@@@@@@@@@@@@@@@
export default class UpdateDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  submit(event) {
    super.submit(event)
    updateElement(this.submitObj, this.where);
    this.close()
  }
}
