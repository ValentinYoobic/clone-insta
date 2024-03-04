import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderArrowComponent } from '../slider-arrow/slider-arrow.component';
import { SlideComponent } from '../slide/slide.component';
import { Slide } from '../slide';
import { isFormRecord } from '@angular/forms';

@Component({
  selector: 'app-slider-carousel',
  standalone: true,
  imports: [CommonModule, SlideComponent, SliderArrowComponent],
  templateUrl: './slider-carousel.component.html',
  styleUrl: './slider-carousel.component.sass',
})
export class SliderCarouselComponent {
  @Input()
  type: 'story' | 'picturePost' = 'picturePost';

  @Input()
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

  // @Input()
  // visibleSlides: 1 | 8 = 8;

  currentIndex: number = 0;

  goToNext(): void {
    if (this.type === 'picturePost') {
      const isLastSlide = this.currentIndex === this.slides.length - 1;
      const newIndex = isLastSlide ? this.currentIndex : this.currentIndex + 1;
      this.currentIndex = newIndex;
    } else {
      const isLastSlide = this.currentIndex + 8 > this.slides.length;
      const newIndex = isLastSlide ? this.currentIndex : this.currentIndex + 4;
      this.currentIndex = newIndex;
    }
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    if (this.type === 'picturePost') {
      const newIndex = isFirstSlide ? this.currentIndex : this.currentIndex - 1;
      this.currentIndex = newIndex;
    } else {
      const newIndex = isFirstSlide ? this.currentIndex : this.currentIndex - 4;
      this.currentIndex = newIndex;
    }
  }

  getCurrentSlide(): Slide {
    return this.slides[this.currentIndex];
  }

  getVisibleSlidesList(): Slide[] {
    if (this.type === 'picturePost') {
      return [this.slides[this.currentIndex]];
    } else {
      let newVisibleSlides = [];
      for (let i = 0; i < 8; i++) {
        if (this.currentIndex + i < this.slides.length) {
          newVisibleSlides.push(this.slides[this.currentIndex + i]);
        }
      }
      return newVisibleSlides;
    }
  }

  getVisibleLeftArrow(): boolean {
    return this.currentIndex > 0;
  }

  getVisibleRightArrow(): boolean {
    if (this.type === 'picturePost') {
      return this.currentIndex < this.slides.length - 1;
    } else {
      return this.currentIndex + 8 < this.slides.length;
    }
  }

  get sliderClass(): string[] {
    return [`slider--${this.type}`];
  }
}
