import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from '../general-components/profile-picture/profile-picture.component';

@Component({
  selector: 'swiper-slide[type="story"]',
  standalone: true,
  imports: [CommonModule, ProfilePictureComponent],
  templateUrl: './swiper-slide-story.component.html',
  styleUrl: './swiper-slide-story.component.sass'
})
export class SwiperSlideStoryComponent {
  avatarUrl= input.required<string>();
}
