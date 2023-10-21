export default class Artist {
  constructor(obj) {
    this.name = obj.name;
    this.birthdate = obj.birthdate;
    this._id = obj.id;

    Object.defineProperty(this, "_id", {
      enumerable: false,
    });
  }
}
