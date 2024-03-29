import { Component, Input } from '@angular/core';
import { User } from '../../user';
import { ProfilePictureComponent } from '../../general-components/profile-picture/profile-picture.component';
import { TextSeparatorComponent } from '../../general-components/text-separator/text-separator.component';
import { TagComponent } from '../../general-components/tag/tag.component';
import { DateService } from '../../general-services/date.service';
import { TextButonComponent } from '../../general-components/text-buton/text-buton.component';

export type SubtitleType = 'Location' | 'Audio' | null

@Component({
  selector: 'app-publication-header',
  standalone: true,
  imports: [ProfilePictureComponent, TextSeparatorComponent, TagComponent, TextButonComponent],
  templateUrl: './publication-header.component.html',
  styleUrl: './publication-header.component.sass'
})
export class PublicationHeaderComponent {
  constructor(private dateService: DateService) {}
  @Input({required: true}) user!: User;
  @Input({required: true}) publicationDate!: number; // timestamp in s
  @Input({required: true}) subTitleType: SubtitleType = null;
  @Input({required: true}) audioName: string | null = null;
  @Input({required: true}) artistName: string | null = null;
  @Input({required: true}) location: string | null = null;
  timeSincePublication: string = '';
  
  ngOnInit() {
    this.timeSincePublication = this.dateService.timeSinceDate(this.publicationDate)
}
}
