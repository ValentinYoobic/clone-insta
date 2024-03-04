import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-buton',
  standalone: true,
  imports: [],
  templateUrl: './text-buton.component.html',
  styleUrl: './text-buton.component.sass'
})
export class TextButonComponent {
  @Input() handleClick: () => void = () => console.log("You clicked on the button")
  @Input({required: true}) text!: string;
}
