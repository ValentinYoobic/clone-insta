import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-arrow.component.html',
  styleUrl: './slider-arrow.component.sass'
})
export class SliderArrowComponent {
  @Input()
  direction: 'left' | 'right' = 'right'

  @Output()
  onClick = new EventEmitter<Event>();

  public get directionClass(): string[] {
    return [`arrow-mask--${this.direction}`]
  }
}
