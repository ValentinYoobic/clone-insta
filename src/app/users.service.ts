import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersList: User[] = [
    {
      id: 0,
      userName: 'michael_jackson',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: true,
      isFollowed: true,
    },
    {
      id: 1,
      userName: 'michael_impersonator',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 2,
      userName: 'hello_kitty',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 3,
      userName: 'lauren90',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage2.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 4,
      userName: 'fanny_pack',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 5,
      userName: 'michael_jackson',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: true,
      isFollowed: true,
    },
    {
      id: 6,
      userName: 'michael_impersonator',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 7,
      userName: 'hello_kitty',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 8,
      userName: 'lauren90',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage2.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 9,
      userName: 'fanny_pack',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 10,
      userName: 'michael_jackson',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: true,
      isFollowed: true,
    },
    {
      id: 11,
      userName: 'michael_impersonator',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 12,
      userName: 'hello_kitty',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 13,
      userName: 'lauren90',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage2.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 14,
      userName: 'fanny_pack',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 15,
      userName: 'uninteresting_ad',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: true,
      isFollowed: false,
    },
    {
      id: 16,
      userName: 'unfollowed_person',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: false,
    },
    {
      id: 17,
      userName: 'hello_kitty',
      hasStory: true,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 18,
      userName: 'noStoryUser',
      hasStory: false,
      profilePhotoUrl: 'assets/profileImage2.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    },
    {
      id: 19,
      userName: 'anonymous',
      hasStory: false,
      profilePhotoUrl: 'assets/profileImage.jpeg', // starting by assets/
      isCertified: false,
      isFollowed: true,
    }
  ]

  getAllUsers(): User[] {
    return this.usersList;
  }

  getUsersWithStory(): User[] | undefined {
    return this.usersList.filter((user)=> user.hasStory && user.isFollowed);
  }
}
