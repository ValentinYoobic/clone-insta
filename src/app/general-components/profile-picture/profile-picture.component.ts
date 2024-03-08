import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type ProfilePictureSizes = 'xxs' | 'xs' | 'small' | 'medium' | 'large'

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.sass'
})
export class ProfilePictureComponent {

  isPortrait: boolean = false;
  /**
  *What profile picture to use?
  */
  @Input()
  profilePictureUrl: string = '/assets/profileImage.jpeg' ;

  /**
  *What profile picture to use?
  */
  @Input()
  size: ProfilePictureSizes = 'medium';

  /**
  *Has the user posted a story?
  */
  @Input()
  hasStory: boolean = false;

  /**
  *Has the story been seen?
  */
  @Input()
  viewedStory: boolean = false;

  @Input()
  hasTransparentBackground: boolean = false;

  @Output()
  onClick = new EventEmitter<Event>();

  public onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    this.isPortrait = img.height > img.width;
  }

  public get imageClasses(): string[] {
    const format = this.isPortrait ? 'portrait' : 'landscape'
    return ['profile-picture', `profile-picture--${this.size}--${format}`]
  } 

  public get paddingClasses(): string[][] {
    if (this.hasStory) {
      return [
        [`profile-picture-padding--story--${this.size}`, `profile-picture-padding--${this.size}`], 
        [`story-gradient--${this.size}`]
      ]
    }
    if (this.viewedStory) {
      return [
        [`profile-picture-padding--story--${this.size}`, `profile-picture-padding--${this.size}`], 
        [`viewed-story-gradient--${this.size}`]
      ]
    }
    return [
      ['profile-picture-padding', `profile-picture-padding--${this.size}`, this.hasTransparentBackground ? 'transparent-background' : ""],
      []
    ]
  } 

}
