import { Component, Input } from '@angular/core';
import { User } from '../user';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { TextSeparatorComponent } from '../text-separator/text-separator.component';

type SubtitleType = 'Location' | 'Audio' | null

@Component({
  selector: 'app-publication-header',
  standalone: true,
  imports: [ProfilePictureComponent, TextSeparatorComponent],
  templateUrl: './publication-header.component.html',
  styleUrl: './publication-header.component.sass'
})
export class PublicationHeaderComponent {
  @Input() user!: User;
  @Input() publicationDate!: number; // timestamp in s
  @Input() subTitleType: SubtitleType = null;
  @Input() audioName: string | null = null;
  @Input() artistName: string | null = null;
  @Input() location: string | null = null;

  timeSincePublication(
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


}
