export default class CreateItemRenderer {
  render(html, update = false) {
    return `<form>${html}
    <input type="submit" value="${update ? "Update" : "Create"}">
    <input type="button" class="button-close" value="Close">
    </form>`;
  }

  addDelete(html){
    return `${html}<input type="button" class="button-delete" value="Delete"></input>`
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

  deleteText(element, type){
        const html = /*html*/ `
        <form>
    <p><b>Are you ABSOLUTELY SURE that you wish to delete the ${type} ${element?.title || element.name}?</b></p>
    <input type="hidden" name="id" value="${element?.id || element._id}">
    <input type="submit" value="Yes, I want to delete this ${type} permanently">
    </form>`;
    return html
  }
}
//  ${extraInfo == element._id ? "selected" : ""}