import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../user';
import { LikesPicturesComponent } from '../likes-pictures/likes-pictures.component';

@Component({
  selector: 'app-likes-statistics',
  standalone: true,
  imports: [CommonModule, LikesPicturesComponent],
  templateUrl: './likes-statistics.component.html',
  styleUrl: './likes-statistics.component.sass'
})
export class LikesStatisticsComponent {
  @Input() likes!: number;
  @Input() whoLiked!: User[];

  getUKNumber(): string {
    return this.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
