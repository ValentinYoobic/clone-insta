import { AfterViewInit, Component, computed, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Signal, ViewChild, input, Input } from '@angular/core';
import { SliderArrowComponent } from '../slider-arrow/slider-arrow.component';
import { Slide } from '../slide';
import { SwiperSlideStoryComponent } from '../swiper-slide-story/swiper-slide-story.component';
import { SwiperSlidePostComponent } from '../swiper-slide-post/swiper-slide-post.component';
@Component({
  selector: 'app-swiper-component',
  standalone: true,
  imports: [SliderArrowComponent, SwiperSlideStoryComponent, SwiperSlidePostComponent],
  templateUrl: './swiper-component.component.html',
  styleUrl: './swiper-component.component.sass',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponentComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('buttonNext') buttonNext!: ElementRef;
  @ViewChild('buttonPrevious') buttonPrevious!: ElementRef; // Ajout de ViewChild pour la flèche précédente
  
  // @Input() slides!: Slide[];
  // @Input() slidesPerViewNumber!: number;
  slidesPerViewNumber= input.required<number>();
  slides = input.required<Slide[]>();
  swiperParams = {
  };
  isLeftArrowVisible=false;
  updateArrowVisibility(): void {
    this.isLeftArrowVisible = this.getCurrentIndex() > 0;
    this.isRightArrowVisible = !this.swiperContainer.nativeElement.swiper.isEnd;
  }
  // isRightArrowVisible=this.slidesPerViewNumber<this.slides?.length;
  isRightArrowVisible=true;

  getCurrentIndex() : number {
    return this.swiperContainer.nativeElement.swiper.activeIndex;
  }
  

  // currentIndex: Signal<number> = computed(()=>this.swiperContainer.nativeElement.swiper.activeIndex);
  handleNextSlide() : void {
    this.swiperContainer.nativeElement.swiper.slideTo(this.getCurrentIndex() + Math.trunc((this.slidesPerViewNumber()+1)/2), 700);
    // console.log('next',this.getCurrentIndex());
  };
  handlePreviousSlide() : void {
    this.swiperContainer.nativeElement.swiper.slideTo(this.getCurrentIndex() -Math.trunc((this.slidesPerViewNumber()+1)/2), 700);
    // console.log('previous',this.getCurrentIndex());
  };
  
  ngAfterViewInit(): void {
    this.swiperParams = {
      slidesPerView: this.slidesPerViewNumber(),
    }
    Object.assign(this.swiperContainer?.nativeElement, this.swiperParams);
    this.swiperContainer?.nativeElement.initialize();
    this.updateArrowVisibility();
    this.swiperContainer.nativeElement.swiper.on('slideChange', () => {
      this.updateArrowVisibility();
    });
    
  }
}
