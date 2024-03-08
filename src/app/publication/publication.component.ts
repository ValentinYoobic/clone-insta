import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { SubtitleType } from './publication-header/publication-header.component';
import { Slide } from '../slide'
import { PublicationHeaderComponent } from './publication-header/publication-header.component';
import { PublicationUnderTextComponent } from './publication-under-text/publication-under-text.component';
import { SliderCarouselComponent } from '../slider-carousel/slider-carousel.component';
import { Publication } from '../publication';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [CommonModule, PublicationHeaderComponent, PublicationUnderTextComponent, SliderCarouselComponent],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.sass'
})
export class PublicationComponent {
  @Input({required: true}) publication!: Publication;

  generateSlides(imagePaths:string[]): Slide[] {
    return imagePaths.map(imagePath=> ({
      pictureUrl: imagePath,
      type: 'picturePost',
      userName: this.publication.publisher.userName
    }));
  }
}
