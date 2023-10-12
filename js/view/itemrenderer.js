export default class ItemRenderer {
  render(item, id) {
    return `<tr id="${id}">${item}</tr>`;
  }
}
