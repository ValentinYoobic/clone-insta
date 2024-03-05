import { Component, Input} from '@angular/core';
import { NgClass } from '@angular/common';

type TextColor = 'blue' | 'black'

@Component({
  selector: 'app-text-buton',
  standalone: true,
  imports: [NgClass],
  templateUrl: './text-buton.component.html',
  styleUrl: './text-buton.component.sass'
})
export class TextButonComponent {
  @Input() handleClick: () => void = () => console.log("You clicked on the button")
  @Input() textColor: TextColor = 'black'
}
