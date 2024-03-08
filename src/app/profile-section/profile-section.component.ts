import { Component, Input } from '@angular/core';
import { User } from '../user';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { TextButonComponent } from '../general-components/text-buton/text-buton.component';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [ProfileCardComponent, TextButonComponent],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.sass'
})
export class ProfileSectionComponent {
  @Input({required: true}) activeUser!: User;
  @Input() suggestedUsers: User[] = [];
}
