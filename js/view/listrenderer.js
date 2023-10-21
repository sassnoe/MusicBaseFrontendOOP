import { itemClicked } from "../main.js";

export default class ListRenderer {
  constructor(list, container, itemRenderer, listUpdater) {
    this._list = list;
    this._itemRenderer = new itemRenderer();
    this._name = container;
    this._container = document.querySelector(container);
    this._tbody = this._container.querySelector("tbody");
    this._listUpdater = listUpdater;
  }

  setList(list) {
    this.list = list.map((item) => new this.itemRenderer(item));

    const sortBy = this.sortBy;
    this.sortBy = undefined;

    this.sort(sortBy, this.sortDir);
  }

  clear() {
    this.container.innerHTML = "";
  }

  get name() {
    return this._name;
  }

  set list(newList) {
    this._list = newList;
  }

  async refreshList() {
    this._list = await this._listUpdater();
  }
  render(filteredList = this._list) {
    console.log("FILTERED LIST:", filteredList);
    this._tbody.innerHTML = "";
    for (const item of filteredList) {
      const html = this._itemRenderer.render(item);
      this._tbody.insertAdjacentHTML("beforeend", html);
      this._tbody.querySelector("tr:last-child").addEventListener("click", () => itemClicked(item, this._name.split("-")[0]));
    }
  }

  search(searchValue) {
    this._searchValue = searchValue;
    this.render(
      this._list.filter((entry) => {
        return entry.title?.toLowerCase().includes(searchValue.toLowerCase()) || entry.name?.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }

  hide() {
    this._container.parentElement.hidden = true;
  }

  show() {
    this._container.parentElement.hidden = false;
  }
}
