import { Component } from '@angular/core';
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

}
