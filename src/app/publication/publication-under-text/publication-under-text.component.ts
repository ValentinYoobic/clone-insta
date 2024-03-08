import { Component, Input } from '@angular/core';
import { User } from '../../user';
import { LikesStatisticsComponent } from '../../likes-statistics/likes-statistics.component';
import { PublicationCaptionComponent } from '../publication-caption/publication-caption.component';
import { ViewCommentsComponent } from '../../view-comments/view-comments.component';
import { PostCommentsComponent } from '../../post-comments/post-comments.component';
import { InteractionBarComponent } from '../interaction-bar/interaction-bar.component';

@Component({
  selector: 'app-publication-under-text',
  standalone: true,
  imports: [
    LikesStatisticsComponent,
    PublicationCaptionComponent,
    ViewCommentsComponent,
    PostCommentsComponent,
    InteractionBarComponent
  ],
  templateUrl: './publication-under-text.component.html',
  styleUrl: './publication-under-text.component.sass',
})
export class PublicationUnderTextComponent {
  @Input({required: true}) likes!: number;
  @Input({required: true}) whoLiked!: User[];
  @Input({required: true}) isCertified: boolean = false;
  @Input({required: true}) userName!: string;
  @Input({required: true}) caption: string | null = null;
  @Input({required: true}) language: 'en' | 'fr' | null = null;

  @Input({required: true}) commentsStatistics!: number;
}
