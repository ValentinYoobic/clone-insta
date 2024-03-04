import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { SliderArrowComponent } from './slider-arrow/slider-arrow.component';
import { SlideComponent } from './slide/slide.component';
import { SliderCarouselComponent } from './slider-carousel/slider-carousel.component';
import { Slide } from './slide';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfilePictureComponent,
    SliderArrowComponent,
    SlideComponent,
    SliderCarouselComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'clone-insta';

  slides: Slide[] = [
    {
      pictureUrl: 'assets/profileImage.jpeg',
      type: 'picturePost',
      userName: 'michael_jackson',
    },
    {
      pictureUrl: 'assets/profileImage2.jpeg',
      type: 'picturePost',
      userName: 'lauren90',
    },
    {
      pictureUrl: 'assets/marvin_gaye.jpeg',
      type: 'picturePost',
      userName: 'marvin_gaye',
    },
  ];
}
