export default class ListRenderer {
  constructor(list, container, itemRenderer) {
    this.list = list;
    this.itemRenderer = new itemRenderer();
    this.container = document.querySelector(container);
  }

  render() {
    console.log(this.list);
    this.container.innerHTML = "";
    for (const item of this.list) {
      const html = this.itemRenderer.render(item);
      this.container.insertAdjacentHTML("beforeend", html);
    }
  }
}
