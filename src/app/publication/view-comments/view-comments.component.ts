import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-comments.component.html',
  styleUrl: './view-comments.component.sass'
})
export class ViewCommentsComponent {
  @Input() commentsStatistics!: number;
}
