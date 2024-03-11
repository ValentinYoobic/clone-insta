import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LightenHoverIconButtonComponent } from '../../general-components/icon-button/lighten-hover-icon-button/lighten-hover-icon-button.component';
import { LikeButtonComponent } from '../like-button/like-button.component';

@Component({
  selector: 'app-interaction-bar',
  standalone: true,
  imports: [LightenHoverIconButtonComponent, LikeButtonComponent],
  templateUrl: './interaction-bar.component.html',
  styleUrl: './interaction-bar.component.sass'
})
export class InteractionBarComponent {
  nullFunction(): void {};
  @Output()
  liked = new EventEmitter<boolean>();
  handleClick2($event: boolean) {
    if ($event) {
      this.liked.emit(true);
    } else {
      this.liked.emit(false);
    }
  }

}
