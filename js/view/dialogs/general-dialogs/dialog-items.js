export default class CreateItemRenderer {
   render(html, update = false) {
    return `<form>${html}
    <input type="submit" value="${update ? "Update" : "Create"}">
    <input type="button" class="button-close" value="Close">
    </form>`;
  }


}
