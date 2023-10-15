export default class Track {
  constructor(obj) {

    this.title = obj.title;
    this.durationSeconds = typeof obj.durationSeconds == "string" ? this.setDuration(obj.durationSeconds) : obj.durationSeconds;
    this.artistName = obj.artistName;
    this.artistIds = [obj.artistID];
    this.albumTitle = obj.albumTitle;
    this.albumIds = obj.albumID
    this._id = obj.id;

    Object.defineProperty(this, "_id", {
      enumerable: false,
    });
  }

  get duration() {
    // Calculate the minutes and seconds
    let minutes = Math.floor(this.durationSeconds / 60);
    let remainingSeconds = this.durationSeconds % 60;

    // Add leading zeros if necessary
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    const formattedTime = formattedMinutes + ":" + formattedSeconds;

    return formattedTime;
  }

  setDuration(timeInMinutesAndSeconds) {
    const minutesAndSecs = timeInMinutesAndSeconds.split(":");
    return minutesAndSecs[0] * 60 + Number(minutesAndSecs[1]);
  }
}
