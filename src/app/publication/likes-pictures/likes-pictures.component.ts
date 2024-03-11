import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../user';
import { ProfilePictureComponent } from '../../general-components/profile-picture/profile-picture.component';
@Component({
  selector: 'app-likes-pictures',
  standalone: true,
  imports: [CommonModule, ProfilePictureComponent],
  templateUrl: './likes-pictures.component.html',
  styleUrl: './likes-pictures.component.sass'
})
export class LikesPicturesComponent {
  @Input() whoLiked!: User[];

  getLikeAvatars(): User[] {
    const likePictures= this.whoLiked.filter((user: User)=> user.isFollowed);
    return likePictures.slice(0,3);
  } 
  
  getClass(i:number): string[] {
    return [`picture--${i}`];
  } 
}
