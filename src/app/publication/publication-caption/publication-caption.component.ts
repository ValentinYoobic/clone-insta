import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ChangeDetectorRef,
} from '@angular/core';
import { TagComponent } from '../../general-components/tag/tag.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-publication-caption',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './publication-caption.component.html',
  styleUrl: './publication-caption.component.sass',
})
export class PublicationCaptionComponent implements AfterViewInit {
  @Input() userName!: string;
  @Input() caption: string | null = null;
  @Input() language: 'en' | 'fr' | null = null;
  @Input() isCertified: boolean = false;
  @ViewChild('captionText', {static: true}) captionText!: ElementRef;
  isCaptionTruncated = true;
  ngAfterViewInit(): void {
    this.checkTruncation();
  }
  needsTruncation(): boolean {
    if (this.captionText) {
      const nativeElement = this.captionText.nativeElement;

      return (
        nativeElement.offsetHeight < nativeElement.scrollHeight ||
        nativeElement.offsetWidth < nativeElement.scrollWidth
      );
    }
    return false;
  }

  handleTruncation(): void {
    this.isCaptionTruncated = false;
  }

  public get truncation() : string[] {
    if (this.isCaptionTruncated) {
      return ['caption'];
    } else {
      return ['caption--shown']
    }
  }
  private checkTruncation(): void {
    this.isCaptionTruncated = this.needsTruncation();
    // if (this.needsTruncation()) {
    //   console.log('truncated');
    // } else {
    //   console.log('not truncated');
    // }
  }

  isTranslated = false;

  handleTranslation() : void {
    this.isTranslated= !this.isTranslated;
  }
}
