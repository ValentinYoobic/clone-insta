import { Component, Input } from '@angular/core';
import { User } from '../user';
import { LikesStatisticsComponent } from '../likes-statistics/likes-statistics.component';
import { PublicationCaptionComponent } from '../publication-caption/publication-caption.component';
import { ViewCommentsComponent } from '../view-comments/view-comments.component';
import { PostCommentsComponent } from '../post-comments/post-comments.component';

@Component({
  selector: 'app-publication-under-text',
  standalone: true,
  imports: [
    LikesStatisticsComponent,
    PublicationCaptionComponent,
    ViewCommentsComponent,
    PostCommentsComponent
  ],
  templateUrl: './publication-under-text.component.html',
  styleUrl: './publication-under-text.component.sass',
})
export class PublicationUnderTextComponent {
  @Input() likes!: number;
  @Input() whoLiked: User[] | null = null;

  @Input() userName!: string;
  @Input() caption: string | null = null;
  @Input() language: 'en' | 'fr' | null = null;

  @Input() commentsStatistics!: number;
}
