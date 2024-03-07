import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { IconType, Size, IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [IconComponent, NgClass],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.sass'
})
export abstract class IconButtonComponent {
  @Input() iconType!: IconType;
  @Input() defaultIconColor: string = 'black';
  @Input() handleClick: (event: MouseEvent) => void = (event: MouseEvent) => console.log('You clicked on the button')
  @Input() iconSize: Size = 'medium'
  @Input({required: true}) buttonWidth!: number;
  @Input({required: true}) buttonHeight!: number;
  @Input() bounce: boolean = false;
  currentIconColor: string = 'black'

  ngOnInit() {
    this.currentIconColor = this.defaultIconColor
  }
  
  abstract handleMouseEnter: () => void

  abstract handleMouseLeave: () => void
}
