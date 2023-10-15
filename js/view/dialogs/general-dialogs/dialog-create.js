import Dialog from "./dialog-super.js";
import { createSomething } from "../../../main.js";

export default class CreateDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  async submit(event) {
    super.submit(event);
    if (await createSomething(this.submitObj, this.where)) {
      this.close();
    }
    else {console.log("FAILURE");}
  }
}
