import { Component, Input } from '@angular/core';

type Size = 'medium'
type SeparatorType = 'middle-point' | 'meatballs'

@Component({
  selector: 'app-text-separator',
  standalone: true,
  imports: [],
  templateUrl: './text-separator.component.html',
  styleUrl: './text-separator.component.sass'
})
export class TextSeparatorComponent {
  @Input() SeparatorType = 'middle-point'
  @Input() size: Size = 'medium'
}
