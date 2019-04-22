import { Component } from '@angular/core';


@Component({
  selector: 'socialposts',
  templateUrl: './socialposts.component.html',
  styleUrls: ['./socialposts.component.css' ]
})
export class SocialPostsComponent {
  title = 'SocialPosts Component Module';
  thoughts = [{ title: 'Kittens', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae quis, optio atque sapiente, sed vero illo ad porro doloremque delectus cupiditate dignissimos, numquam voluptate? Eaque adipisci facere sed repellat.'}, { title: 'Puppies', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae quis, optio atque sapiente, sed vero illo ad porro doloremque delectus cupiditate dignissimos, numquam voluptate? Eaque adipisci facere sed repellat.' }, { title: 'Ponies', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae quis, optio atque sapiente, sed vero illo ad porro doloremque delectus cupiditate dignissimos, numquam voluptate? Eaque adipisci facere sed repellat.' }];

showVar: boolean = false;
titleInput: string;
contentInput: string;

toggleChild() {
    this.showVar = !this.showVar;
};

removeThought = (index) => {
    this.thoughts.splice(index, 1);
  };

onSubmit = (newThought) => { 
        this.thoughts.push(newThought);
        this.showVar = !this.showVar;
    };
    
}
