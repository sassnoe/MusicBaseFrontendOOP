import Dialog from "./dialog-super.js";
import { updateClicked } from "../../../main.js";

export default class DetailsDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  submit(event){
    event.preventDefault()
    updateClicked(this.name, this.elementToShow);
    this.close()
  }

  getAssociatedEntries(DetailRenderer, item){
    console.log(item);
    console.log(DetailRenderer);
    this.DetailRenderer = DetailRenderer
    return this.DetailRenderer.getItems(item)
  }
}
