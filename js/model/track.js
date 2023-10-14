export default class Tracks {
  constructor(obj) {
    this.title = obj.title;
    this.durationSeconds = obj.durationSeconds;
    this.artistName = obj.artistName;
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

  set duration(timeInMinutesAndSeconds){
    const minutesAndSecs = timeInMinutesAndSeconds.split(":")
    let time = minutesAndSecs[0]*60+minutesAndSecs[1]
    console.log(time);
  }
}
