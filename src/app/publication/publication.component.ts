import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { SubtitleType } from './publication-header/publication-header.component';
import { Slide } from '../slide'
import { PublicationHeaderComponent } from './publication-header/publication-header.component';
import { PublicationUnderTextComponent } from './publication-under-text/publication-under-text.component';
import { Publication } from '../publication';
import { SwiperComponentComponent } from '../swiper-component/swiper-component.component';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [CommonModule, PublicationHeaderComponent, PublicationUnderTextComponent, SwiperComponentComponent],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.sass'
})
export class PublicationComponent {
  @Input({required: true}) publication!: Publication;
  @Input({required: true}) activeUser!: User;

  generateSlides(imagePaths:string[]): Slide[] {
    return imagePaths.map(imagePath=> ({
      pictureUrl: imagePath,
      type: 'picturePost',
      userName: this.publication.publisher.userName
    }));
  }

  handleClick4($event: boolean): void {
    if ($event) {
      this.publication.likers.push(this.activeUser);
    } else {
      const unliker=this.publication.likers.pop();
    }
  }

  handlePostComment($event: string) {
    this.publication.comments.push($event);
  }
}
