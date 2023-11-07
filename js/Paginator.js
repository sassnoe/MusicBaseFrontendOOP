import ListRenderer from "./view/listrenderer.js";
import { getTracks } from "./http.js";

export default class Paginator extends ListRenderer {
  constructor(list, container, itemRenderer, listUpdater, pageContainer, limitContainer) {
    super(list, container, itemRenderer, listUpdater);
    this.pageList = document.querySelector(pageContainer);
    this.limitList = document.querySelector(limitContainer);
    this.length = list.length;
  }

  createOptionsAndApply() {
    // Checks value from the dom. Uses this value to determine how many options to make
    this.limit = this.limitList.value;
    const limitLength = this.length / this.limit;

    // clear DOM so the method can be reused
    this.pageList.innerHTML = "";
    for (let i = 1; i < limitLength + 1; i++) {
      this.pageList.insertAdjacentHTML("beforeend", `<option value="${i}" >${i}</option>`);
    }

    // If we for example choose page 100 when showing 5 tracks per page, we will be unable to show this page if we change the option to show 15 tracks per page
    // - there simply wont be enough tracks to reach page 100. It's then unable to find a matching value and defaults to 1.
    // Meaning if you're deep into the list and suddenly feel like you want to see more elements per page, you'll be thrown right back to the start. how sad!!
    // We therefore can combine the page value with the limit value to figure out how far into the list we are
    // This value can then be used against the NEW limit value to figure out how many pages deep we're supposed to be given the changed values
    // NOTE: Problem with calculating back and forth. Since we need to round to nearest number, we wont be able to do perfect calculations back and forth. Idk how to fix this easily
    // Perhaps save some property values for the page number whenever we change the limit value?
    const calculatedPage = Math.floor(this.tracksShown / this.limit);
    // Get all the option elements from the DOM - find the one with value matching the saved value and select it.
    this.pageList.querySelectorAll("option").forEach((btn) => {
      if (Number(btn.value) === Number(calculatedPage)) {
        console.log("this button was selected!", btn);
        btn.selected = true;
      }
    });

    // Whenever we want to see a new page
    this.pageList.addEventListener("change", this.paginate.bind(this));
    this.paginate();
  }

  async paginate() {
    this.tracksShown = this.pageList.value * this.limit;
    console.log("TRACKS SHOWN", this.tracksShown);
    this.limit = this.limitList.value;
    const paginatedTracks = await getTracks(this.pageList.value, this.limit);
    super.render(paginatedTracks);
  }
}
