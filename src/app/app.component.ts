import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfilePictureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'clone-insta';
}
