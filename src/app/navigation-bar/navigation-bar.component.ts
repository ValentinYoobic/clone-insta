import { Component } from '@angular/core';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NavigationButtonComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.sass'
})
export class NavigationBarComponent {

}
