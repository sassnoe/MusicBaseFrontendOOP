import Dialog from "./dialog-SUPER.js";
export default class CreateDialog extends Dialog {
  constructor(id) {
    super(id);
  }

  render(createToShow) {
    this.creater = createToShow;
    const html = createToShow.render();
    this.dialog.innerHTML = html;
    this.dialog.querySelector("form").addEventListener("submit", submit);
    this.show();
  }

  submit(event) {
    this.form = event.target;
    const objToSubmit = this.creater.submit(this.form);
  }
}

// const html =
//   /*html*/
//   `
//   <form>
//   <input type="text">
//   <input type="submit" class="submit-btn">
//   </form>
//     <button class="close-btn">Close</button>
//     `;
// this.dialog.insertAdjacentHTML("beforeend", html);
// this.dialog.querySelector(".close-btn").addEventListener("click", this.close.bind(this));
