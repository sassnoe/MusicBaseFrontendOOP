export default class Album {
  constructor(obj) {
    this.title = obj.title;
    this.releaseYear = obj.releaseYear;
    this.artistName = obj.artistName;
    this.artistIds = [obj.artistId]
    this._id = obj.id;

    Object.defineProperty(this, "_id", {
      enumerable: false,
    });
  }
}
