import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  timeSinceDate(
    publicationDate: number // timestamp in s
  ): string {

  // Calculate the time difference in milliseconds
  let timeDifference: number = Math.abs(publicationDate - (new Date()).getTime());
  
  // Convert milliseconds to other units
  const millisecondsInSecond: number = 1000;
  const millisecondsInMinute: number = 60000;
  const millisecondsInHour: number = 3600000;
  const millisecondsInDay: number = 86400000;
  const millisecondsInWeek: number = 604800000;
  const millisecondsInYear: number = 31536000000;
  console.log(publicationDate)
  if (timeDifference < millisecondsInMinute) {
      return Math.floor(timeDifference / millisecondsInSecond) + " s";
  } else if (timeDifference < millisecondsInHour) {
      return Math.floor(timeDifference / millisecondsInMinute) + " min";
  } else if (timeDifference < millisecondsInDay) {
      return Math.floor(timeDifference / millisecondsInHour) + " h";
  } else if (timeDifference < millisecondsInWeek) {
      return Math.floor(timeDifference / millisecondsInDay) + " d";
  } else if (timeDifference < millisecondsInYear) {
      return Math.floor(timeDifference / millisecondsInWeek) + " w";
  } else {
      return Math.floor(timeDifference / millisecondsInYear) + " y";
  }
}
  constructor() { }
}
