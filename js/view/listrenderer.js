import { itemClicked } from "../main.js";

export default class ListRenderer {
  constructor(list, container, itemRenderer) {
    this._list = list;
    this._itemRenderer = new itemRenderer();
    this._name = container;
    this._container = document.querySelector(container);
    this._tbody = this._container.querySelector("tbody");
  }

  get name() {
    return this._name;
  }
  render(filteredList = this._list) {
    console.log("FILTERED LIST:", filteredList);
    this._tbody.innerHTML = "";
    for (const item of filteredList) {
      const html = this._itemRenderer.render(item);
      this._tbody.insertAdjacentHTML("beforeend", html);
      this._tbody.querySelector("tr:last-child").addEventListener("click", itemClicked);
    }
  }



  search(searchValue) {
    this._searchValue = searchValue;
    this.render(
      this._list.filter((entry) => {
        return entry.title?.toLowerCase().includes(searchValue.toLowerCase()) || entry.name?.toLowerCase().includes(searchValue.toLowerCase())         
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
