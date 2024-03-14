import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'swiper-slide[type="picturePost"]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper-slide-post.component.html',
  styleUrl: './swiper-slide-post.component.sass'
})
export class SwiperSlidePostComponent {
  avatarUrl= input.required<string>();
}
