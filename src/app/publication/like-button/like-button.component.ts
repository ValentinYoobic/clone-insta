import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NoHoverIconButtonComponent } from '../../general-components/icon-button/no-hover-icon-button/no-hover-icon-button.component';
import { LightenHoverIconButtonComponent } from '../../general-components/icon-button/lighten-hover-icon-button/lighten-hover-icon-button.component';
import { Size } from '../../general-components/icon/icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [NgClass, NoHoverIconButtonComponent, LightenHoverIconButtonComponent],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.sass'
})
export class LikeButtonComponent {
  @Input() handleLike: () => void = () => console.log('You clicked on like')
  @Input() handleUnlike: () => void = () => console.log('You clicked on unlike')
  @Input() iconSize: Size = 'medium'
  @Input({required: true}) buttonWidth!: number;
  @Input({required: true}) buttonHeight!: number;
  @Input() isLiked: boolean = false;
  makeLikeAnimation: boolean = false;

  @Output()
  liked = new EventEmitter<boolean>();
  handleClick() {
    this.isLiked = !this.isLiked
    if (this.isLiked) {
      this.makeLikeAnimation = true;
      this.liked.emit(true);
    } else {
      this.liked.emit(false);}
  }


}
