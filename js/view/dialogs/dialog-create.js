import Dialog from "./dialog-SUPER.js";
export default class CreateElement extends Dialog {
  constructor(id) {
    super(id);
  }

  render(createToShow) {
    this.creater = createToShow
    // this.dialog.innerHTML = "";
    const html = createToShow.render()
    this.dialog.innerHTML = html
    this.dialog.querySelector("form").addEventListener("submit",submit)
    this.show();
  }

  submit(event){
    this.creater
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