export default class CreateItemRenderer {
  render(html, update = false) {
    return `<form>${html}
    <input type="submit" value="${update ? "Update" : "Create"}">
    <input type="button" class="button-close" value="Close">
    </form>`;
  }

  addDelete(){
    return `<input type="button" class="button-delete" value="Delete"></input>`
  }
  fillList(elementList, select, selectThisID) {
    console.log(elementList);
    elementList.forEach((element) => {
       select.insertAdjacentHTML("beforeend", `<option value="${element._id}">${element.name || element.title}</option>`);
       if (selectThisID == element._id) {
        select.querySelector("option:last-child").selected = true
       }
    });
  }
}
//  ${extraInfo == element._id ? "selected" : ""}