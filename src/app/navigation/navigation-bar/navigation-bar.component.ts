import { Component, Input } from '@angular/core';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { NgClass } from '@angular/common';

type Menu = 'Home' | 'Search' | 'Explore' | 'Reels' | 'Message' | 'Notifications' | 'Create' | 'Profile'

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NavigationButtonComponent, NgClass],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.sass'
})
export class NavigationBarComponent {
  @Input({required: true}) userProfilePhotoUrl!: string;
  currentMenu: Menu = 'Home'

  changeCurrentMenu = (newMenu: Menu) => {
    return (event: MouseEvent) => {this.currentMenu = newMenu}
  }
}
