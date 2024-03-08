import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { User } from './user';
import { SliderCarouselComponent } from './slider-carousel/slider-carousel.component';
import { Slide } from './slide';
import { FeedSelectorComponent } from './feed-selector/feed-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    ProfileSectionComponent,
    SliderCarouselComponent,
    FeedSelectorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  activeUser: User = {
  id: 1,
  userName: 'MJ_Official',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: true,
  isFollowed: false,
  subTitle: 'Michael Jackson'
}
  suggestedUsers: User[] = [
    {
  id: 2,
  userName: 'JohnnyLeBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: false,
  isFollowed: false
},
    {
  id: 3,
  userName: 'JohnnyLeGrosBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: false,
  isFollowed: false
},
    {
  id: 4,
  userName: 'JohnnyLeMégaBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: false,
  isFollowed: false
},
    {
  id: 5,
  userName: 'JohnnyLeGigaBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: false,
  isFollowed: false
},
    {
  id: 6,
  userName: 'JohnnyLeTeraBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: true,
  isFollowed: false,
  subTitle: '7 Bilion Followers'
},
]
  storyContent: Slide[] = [
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user1',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user2',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user3',
      },
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user4',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user5',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user6',
      },
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user7',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user8',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user9',
      },
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user10',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user11',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user12',
      },
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user13',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user14',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user15',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user16',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user17',
      },
]
}
