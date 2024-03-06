
import { Component } from "@angular/core"
import { IconComponent } from "../../icon/icon.component"
import { NgClass } from "@angular/common"
import { IconButtonComponent } from "../icon-button.component"

@Component({
  selector: 'app-lighten-hover-icon-button',
  standalone: true,
  imports: [IconComponent, NgClass],
  templateUrl: '../icon-button.component.html',
  styleUrl: '../icon-button.component.sass'
})
export class LightenHoverIconButtonComponent extends IconButtonComponent {
  handleMouseEnter = () => {
    this.currentIconColor = '#8E8E8E'
  }
  handleMouseLeave = () => {
    this.currentIconColor = this.defaultIconColor
  }
}