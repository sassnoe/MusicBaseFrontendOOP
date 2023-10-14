export default class CreateItemRenderer {
   render(html) {
    return `<form>${html}
    <input type="submit" value="Create">
    <input type="button" class="button-close" value="Close">
    </form>`;
  }


}
