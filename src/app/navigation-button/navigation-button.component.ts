import { Component, Input } from '@angular/core';

type NavigationIconType =
  'Heart' |
  'Add' |
  'Compass' |
  'Home' |
  'Search' |
  'Send' |
  'Video' |
  'User' |
  'Threads' |
  'Menu'

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.sass'
})
export class NavigationButtonComponent {
  @Input() label: string = ''
  @Input() icon: NavigationIconType | undefined;
  @Input() active: boolean = false;

  getIconLink(iconName: NavigationIconType | undefined) {
    if (iconName === 'User' || iconName === undefined) {
      return '' //TODO
    } else {
      return 'assets/' + iconName.toLowerCase() + '-icon.png'
    }
  }
}
