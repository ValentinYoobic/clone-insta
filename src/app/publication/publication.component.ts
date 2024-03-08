import { Component, Input } from '@angular/core';
import { User } from '../user';
import { SubtitleType } from './publication-header/publication-header.component';
import { PublicationHeaderComponent } from './publication-header/publication-header.component';
import { PublicationUnderTextComponent } from '../publication-under-text/publication-under-text.component';
import { SliderCarouselComponent } from '../slider-carousel/slider-carousel.component';
import { Publication } from '../publication';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [PublicationHeaderComponent, PublicationUnderTextComponent, SliderCarouselComponent],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.sass'
})
export class PublicationComponent {
  @Input({required: true}) publication!: Publication;
}
