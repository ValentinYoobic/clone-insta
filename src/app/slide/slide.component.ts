import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from '../general-components/profile-picture/profile-picture.component';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, ProfilePictureComponent],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.sass'
})
export class SlideComponent {
   /**
   * Is it a slide of story or a picture in a post ?
   */
  @Input()
  type: 'story' | 'picturePost' = 'story';

  /**
   * What url to use for the image ?
   */
  @Input()
  pictureUrl: string = 'assets/profileImage2.jpeg';

  /**
   * What is the username ?
   */
  @Input()
  userName: string = 'michael_jackson';

  getPicturePostUrl(): string {
    const path = '../../'+this.pictureUrl;
    return `url(${path})`;
  }

  getAvatarUrl(): string {
    return this.pictureUrl;
  }
}
