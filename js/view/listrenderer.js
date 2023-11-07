import { itemClicked } from "../main.js";

export default class ListRenderer {
  constructor(list, container, itemRenderer, listUpdater) {
    this._list = list;
    this.itemRenderer = new itemRenderer();
    this.name = container;
    this.container = document.querySelector(container);
    this.tbody = this.container.querySelector("tbody");
    this.listUpdater = listUpdater;
  }

  get name() {
    return this.name;
  }

  set list(newList) {
    this._list = newList;
  }

  get list() {
    return this._list;
  }

  async refreshList() {
    this._list = await this.listUpdater();
  }

  render(filteredList = this._list) {
    this.tbody.innerHTML = "";
    for (const item of filteredList) {
      const html = this.itemRenderer.render(item);
      this.tbody.insertAdjacentHTML("beforeend", html);
      this.tbody.querySelector("tr:last-child").addEventListener("click", () => itemClicked(item, this.name.split("-")[0]));
    }
  }

  search(searchValue) {
    this.render(
      this._list.filter((entry) => {
        return entry.title?.toLowerCase().includes(searchValue.toLowerCase()) || entry.name?.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }

  hide() {
    this.container.parentElement.hidden = true;
  }

  show() {
    this.container.parentElement.hidden = false;
  }

  // clear() {
  //   this.container.innerHTML = "";
  // }
}
