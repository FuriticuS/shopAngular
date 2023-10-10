import { Component } from '@angular/core';

@Component({
  selector: 'app-post-three',
  templateUrl: './post-three.component.html',
  styleUrls: ['./post-three.component.scss']
})
export class PostThreeComponent {
  title='Add text'
  titleTwo='Add text'

  onInput(event: any){
    this.title = event.target.value;
  }
}
