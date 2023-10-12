import { secondsToMinutesAndSeconds } from '../helpers.js';

export default class Tracks {
  constructor(obj) {
    this.title = obj.title;
    this.durationSeconds = obj.durationSeconds;
    this.artistName = obj.artistName
  }
  set durationSeconds(seconds) {
    this._durationSeconds = secondsToMinutesAndSeconds(seconds);
  }
  get durationSeconds() {
    return this._durationSeconds;
  }

  get duration(){
    // Calculate the minutes and seconds
    let minutes = Math.floor(this.durationSeconds / 60);
    let remainingSeconds = this.durationSeconds % 60;

    // Add leading zeros if necessary
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes
    const formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds

    const formattedTime = formattedMinutes + ":" + formattedSeconds;

    return formattedTime;
  }
}

