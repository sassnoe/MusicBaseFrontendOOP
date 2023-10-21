export default class Album {
  constructor(obj) {
    this.title = obj.title;
    this.releaseYear = obj.releaseYear;
    this.artistName = obj.artistName;
    this.artistIds = [obj.artistID];
    this._id = obj.id;

    Object.defineProperty(this, "_id", {
      enumerable: false,
    });
  }

  verify() {
    console.log("this title",this.title);
    console.log("this release",this.releaseYear);
    console.log("this artits ids",this.artistIds);
    if (this.title && this.releaseYear && this.artistIds) {
      return true;
    } else {
      return false;
    }
  }
}
