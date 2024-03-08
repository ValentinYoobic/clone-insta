import { Component, Input } from '@angular/core';
import { IconComponent, IconType } from '../../general-components/icon/icon.component';
import { ProfilePictureComponent } from '../../general-components/profile-picture/profile-picture.component';

type NavigationIconType = IconType | 'Profile'

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [IconComponent, ProfilePictureComponent],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.sass'
})
export class NavigationButtonComponent {
  @Input() label: string = ''
  @Input() iconType!: NavigationIconType;
  @Input() active: boolean = false;
  @Input() userProfilePhotoUrl!: string;
  @Input() handleClick: (event: MouseEvent) => void = (event: MouseEvent) => {console.log('you clicked on the button')}
}
