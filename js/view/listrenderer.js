export default class ListRenderer {
  constructor(list, container, itemRenderer) {
    this.list = list;
    this.itemRenderer = new itemRenderer();
    this.container = document.querySelector(container);
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

  render() {
    this.clear();

    // create a filtered list to render
    const filteredList = this.list.filter((item) => this.filter(item));

    console.log(this.list);
    for (const item of this.list) {
      const html = this.itemRenderer.render(item);
      this.container.insertAdjacentHTML("beforeend", html);
    }
  }

  sort(sortBy, sortDir) {
    // if sorting by the same as previous property
    if (sortBy === this.sortDir) {
      // toggle sort direction
      this.sortDir = this.sortDir === "asc" ? "desc" : "asc";
    } else {
      if (sortDir) {
        this.sortDir = sortDir;
      } else {
        this.sortDir = "asc";
      }
    }

    this.sortBy = sortBy;
  }

  filter(filterProperty, filterValue) {
    this.filterProperty = filterProperty;
    this.filterValue = filterValue;

    this.render();
  }
}
