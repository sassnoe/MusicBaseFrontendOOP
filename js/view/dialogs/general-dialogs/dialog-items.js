export default class CreateItemRenderer {
  render(html, update = false) {
    return `<form>${html}
    <input type="submit" value="${update ? "Update" : "Create"}">
    <input type="button" class="button-close" value="Close">
    </form>`;
  }

  fillList(elementList, select) {
    elementList.forEach((element) => {
      select.insertAdjacentHTML("beforeend", `<option value="${element._id}">${element.name || element.title}</option>`);
    });
  }
}
