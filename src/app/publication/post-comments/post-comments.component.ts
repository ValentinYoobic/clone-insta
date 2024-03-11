import { Component, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { TextButonComponent } from '../../general-components/text-buton/text-buton.component';
import { LightenHoverIconButtonComponent } from '../../general-components/icon-button/lighten-hover-icon-button/lighten-hover-icon-button.component';

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextButonComponent, LightenHoverIconButtonComponent],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.sass'
})
export class PostCommentsComponent implements AfterViewInit {
  @Output() newComment= new EventEmitter<string>();
  applyForm = new FormGroup({
    comment: new FormControl(''),
  });

  submitComment() {
    // console.log(
    //   `You commented: ${this.applyForm.value.comment ?? ''}`);
    this.newComment.emit(this.applyForm.value.comment?? '');
  }
  handleShowPostButton(): boolean {
    if (this.applyForm.value.comment && this.applyForm.value.comment.length>0) {
      return true
    } return false
  }
  handlePostButton(): void {
    if (this.applyForm) {
      const commentControl = this.applyForm.get('comment');
      if (commentControl) {
        commentControl.setValue('');
      }
    }
  }
  handleEmojiButtonClick(event: Event) {
    event.preventDefault();
    console.log('You clicked on the Emoji panel!')
  }
  


  @ViewChild('commentArea') commentArea!: ElementRef;
  areaResize(): void {
    const textArea = this.commentArea.nativeElement;
    textArea.addEventListener(
      'input', 
      ()=> {
        let finalHeight=80;
        if (textArea.scrollHeight<=80) {
          finalHeight=textArea.scrollHeight};
        textArea.style.height='auto';
        textArea.style.height=finalHeight + 'px'
      }, 
      false)
  }
  ngAfterViewInit(): void {
    this.areaResize();
  }
}
