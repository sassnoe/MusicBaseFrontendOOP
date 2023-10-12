import Dialog from "./dialog-SUPER.js";
export default class CreateElement extends Dialog {
  constructor(id) {
    super(id);
  }

  render() {
    this.dialog.innerHTML = "";
    const html =
      /*html*/
      `
      <form>
      <input type="text">
      <input type="submit" class="submit-btn">
      </form>
        <button class="close-btn">Close</button>
        `;
    this.dialog.insertAdjacentHTML("beforeend", html);
    this.dialog.querySelector(".close-btn").addEventListener("click", this.close.bind(this));
    this.show();
  }
}
