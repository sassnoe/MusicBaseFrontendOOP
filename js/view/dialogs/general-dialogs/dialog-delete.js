import { deleteElement } from "../../../http.js";
import Dialog from "./dialog-super.js";
// import { createSomething } from "../../../main.js";
//////////////////////////////////
// REPLACE @@@@@@@@@@@@@@@@@@@ ///
//////////////////////////////////
export default class DeleteDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  async submit(event) {
    console.log("are we submitting?");
    super.submit(event);
    if (await deleteElement(this.submitObj, this.where)) {
      this.refresh(this.where);
    } else {
      console.log("FAILURE");
    }
  }
}
