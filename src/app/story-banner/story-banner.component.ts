import { Component, inject } from '@angular/core';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { User } from '../user';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-banner',
  standalone: true,
  imports: [CommonModule, ProfilePictureComponent],
  templateUrl: './story-banner.component.html',
  styleUrl: './story-banner.component.sass'
})

export class StoryBannerComponent {
  usersWithStory: User[] | undefined = [];
  usersService: UsersService = inject(UsersService);

  constructor() {
    this.usersWithStory = this.usersService.getUsersWithStory();
  }

}
