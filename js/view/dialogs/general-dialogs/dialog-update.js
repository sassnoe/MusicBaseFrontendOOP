import Dialog from "./dialog-SUPER.js";
import { updateElement } from "../../../http.js";

// REPLACE @@@@@@@@@@@@@@@@@@@
export default class UpdateDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  async submit(event) {
    super.submit(event);
    // console.log("SHOW THIS:",this.elementToShow);
    if (await updateElement(this.submitObj, this.where, this.elementToShow._id || this.elementToShow.id)) {
      this.refresh(this.where);
    }
  }
}
