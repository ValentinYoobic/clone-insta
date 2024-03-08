import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { User } from './user';
import { SliderCarouselComponent } from './slider-carousel/slider-carousel.component';
import { Slide } from './slide';
import { FeedSelectorComponent } from './feed-selector/feed-selector.component';
import { Publication } from './publication';
import { PublicationComponent } from './publication/publication.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    ProfileSectionComponent,
    SliderCarouselComponent,
    FeedSelectorComponent,
    PublicationComponent
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
        userName: 'MJ',
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
        userName: 'this.activeUser0',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'this.activeUser1',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'this.activeUser2',
      },
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'this.activeUser3',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'this.activeUser4',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'this.activeUser5',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'this.activeUser6',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'this.activeUser7',
      },
]
  feedContent: Publication[] = [
    {
        id: 1,
        publisher: this.activeUser,
        publicationDate: ((new Date(2024, 0, 1)).getTime()),
        subtitleType: 'Audio',
        audioName: 'Billie Jean',
        artistName: 'Michael Jackson',
        location: 'Heaven',
        likers: [this.activeUser,this.activeUser,this.activeUser],
        caption: 'nouvelle photo de profil ! \n \n #newprofilepic #paris #selfie',
        language: 'fr',
        comments: ['oui', 'génail'],
        content: ['assets/profileImage.jpeg','assets/profileImage2.jpeg']
    },
    {
        id: 2,
        publisher: this.activeUser,
        publicationDate: ((new Date(2024, 0, 1)).getTime()),
        subtitleType: 'Audio',
        audioName: 'Billie Jean',
        artistName: 'Michael Jackson',
        location: 'Heaven',
        likers: [this.activeUser,this.activeUser,this.activeUser],
        caption: 'nouvelle photo de profil ! \n \n #newprofilepic #paris #selfie',
        language: 'fr',
        comments: ['oui', 'génail'],
        content: ['assets/profileImage.jpeg']
    },
    {
        id: 3,
        publisher: this.activeUser,
        publicationDate: ((new Date(2024, 0, 1)).getTime()),
        subtitleType: 'Audio',
        audioName: 'Billie Jean',
        artistName: 'Michael Jackson',
        location: 'Heaven',
        likers: [this.activeUser,this.activeUser,this.activeUser],
        caption: 'nouvelle photo de profil ! \n \n #newprofilepic #paris #selfie',
        language: 'fr',
        comments: ['oui', 'génail'],
        content: ['assets/profileImage.jpeg']
    }
  ]
}
