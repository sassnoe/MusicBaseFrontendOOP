import Dialog from "./dialog-super.js";
import { createElement } from "../../../http.js";
// import {}

export default class CreateDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  async submit(event) {
    super.submit(event);
    if (await createElement(this.submitObj, this.where)) {
      this.close();
    } else {
      console.log("FAILURE");
    }
  }
}
