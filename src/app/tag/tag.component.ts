import { Component, Input, Signal, WritableSignal, computed, signal } from '@angular/core';

type TagType = "Certified"
type Size = "medium"

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.sass'
})
export class TagComponent {
  @Input() type: TagType = 'Certified';
  @Input() size: Size = 'medium';
  width: number = this.computeWidth(this.size)

  computeWidth(size: Size) {
    switch (size) {
      case 'medium':
        return 16;
        break
      default:
        return 16
    }
  }

  
}
