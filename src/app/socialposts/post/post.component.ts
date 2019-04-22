import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Thought {
  title: string;
  content: string;
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title = 'Post Component Module';
  nameInput: string = null;
  @Input() post: Thought;


}
