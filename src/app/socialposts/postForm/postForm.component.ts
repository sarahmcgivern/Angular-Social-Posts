import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'postForm',
  templateUrl: './postForm.component.html',
  styleUrls: ['./postForm.component.css']
})
export class PostFormComponent {
  title = 'PostForm Component Module';
  titleInput: string;
  contentInput: string;

    @Input() postForm: any;
    @Input() showMePartially: boolean;
    @Output() submitted = new EventEmitter<any>(); 

onSubmit() {
    this.submitted.emit({
        title: this.titleInput,
        content: this.contentInput
});
        this.titleInput = null;
        this.contentInput = null;
}
    
  

}
