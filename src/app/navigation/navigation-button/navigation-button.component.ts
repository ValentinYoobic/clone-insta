import { Component, Input } from '@angular/core';
import { IconComponent, IconType } from '../../general-components/icon/icon.component';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.sass'
})
export class NavigationButtonComponent {
  @Input() label: string = ''
  @Input() iconType!: IconType;
  @Input() active: boolean = false;

}
