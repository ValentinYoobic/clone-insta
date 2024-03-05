import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { ProfilePictureComponent } from '../general-components/profile-picture/profile-picture.component';
@Component({
  selector: 'app-likes-pictures',
  standalone: true,
  imports: [CommonModule, ProfilePictureComponent],
  templateUrl: './likes-pictures.component.html',
  styleUrl: './likes-pictures.component.sass'
})
export class LikesPicturesComponent {
  @Input() whoLiked!: User[];

  getClass(i:number): string[] {
    console.log(i);
    return [`picture--${i}`];
  } 
}
