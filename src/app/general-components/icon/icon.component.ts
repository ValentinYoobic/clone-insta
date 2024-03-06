import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type IconType = 'Heart' |
  'Add' |
  'Compass' |
  'Home' |
  'Search' |
  'Send' |
  'Video' |
  'User' |
  'Threads' |
  'Burger' |
  'Meatballs' |
  'ChatBubble' |
  'Save' |
  'Emoji' |
  'Close' |
  'Instagram' |
  'Heart-Filled' |
  'Home-Filled' |
  'Compass-Filled' |
  'Video-Filled' |
  'Send-Filled' |
  'Save-Filled' |
  'Bouncing-Heart'


export type Size = 'medium' | 'small'

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.sass'
})
export class IconComponent {
  @Input({required: true}) iconType!: IconType;
  @Input({required: true}) size!: Size;
  @Input() color: string = 'black';
  @Input() bounce: boolean = false;
  width!: number;


  ngOnInit () {
    this.width = this.computeSize(this.size)
  }

  computeSize (size: Size): number {
    switch (size) {
      case ('medium'):
        return 24
      case ('small'):
        return 13
      default:
        return 24
    }
  }
}
