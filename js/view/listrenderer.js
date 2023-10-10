export default class ListRenderer {

  constructor(list, container, itemRenderer) {
    this.list = list;
    this.itemRenderer = new itemRenderer();
  }
}