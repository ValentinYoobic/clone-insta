import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, Output, EventEmitter  } from '@angular/core';


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
  profilePictureUrl: string = 'assets/profileImage.jpeg' ;

  /**
  *What profile picture to use?
  */
  @Input()
  size: 'xxs' | 'xs' | 'small' | 'medium' | 'large' = 'medium';

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

  @Output()
  onClick = new EventEmitter<Event>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.checkImageOrientation();
  }

  private checkImageOrientation() {
    const img = new Image();
    img.onload = () => {
      this.isPortrait = img.height > img.width;
      console.log('width'+img.width);
      console.log('height'+img.height);
      console.log(this.isPortrait);
    };
    img.src = this.profilePictureUrl;
  }

  public get imageClasses(): string[] {
    const format = this.isPortrait ? 'portrait' : 'landscape'
    console.log(format);
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
      ['profile-picture-padding', `profile-picture-padding--${this.size}`],
      []
    ]
  } 

}
