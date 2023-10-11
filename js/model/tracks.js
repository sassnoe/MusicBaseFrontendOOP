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
}

