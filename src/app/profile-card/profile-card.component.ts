import { Component, Input } from '@angular/core';
import { User } from '../user';
import { ProfilePictureComponent } from '../general-components/profile-picture/profile-picture.component';
import { TextButonComponent } from '../general-components/text-buton/text-buton.component';
import { TagComponent } from '../general-components/tag/tag.component';

type InteractionButtonType = 'Follow' | 'Switch'

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ProfilePictureComponent, TextButonComponent, TagComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.sass'
})
export class ProfileCardComponent {
  @Input({required: true}) user!: User;
  @Input() subTitle: string | null = null;
  @Input() interactionButtonType: InteractionButtonType = 'Follow';
}
