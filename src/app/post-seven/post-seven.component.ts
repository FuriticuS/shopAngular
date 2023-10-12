import { Component } from '@angular/core';

@Component({
  selector: 'app-post-seven',
  templateUrl: './post-seven.component.html',
  styleUrls: ['./post-seven.component.scss']
})
export class PostSevenComponent {
  arr = [1,1,2,3,5,7,9,11]

  posts = [
    {
      title: 'post 1',
      name: 'Dan',
      comments: [
        {name:'Shon', text:'Hi hello hi hello hi hello'},
        {name:'Terry', text:'Hi hello hi hello hi hello'},
        {name:'Barbara', text:'Hi hello hi hello hi hello'},
        {name:'Lucy', text:'Hi hello hi hello hi hello'},
      ]
    },
    {
      title: 'post 2',
      name: 'Johan',
      comments: [
        {name:'Tim', text:'Hi hello hi hello hi hello'},
        {name:'July', text:'Hi hello hi hello hi hello'},
        {name:'Tron', text:'Hi hello hi hello hi hello'},
        {name:'Bran', text:'Hi hello hi hello hi hello'},
      ]
    },
    {
      title: 'post 3',
      name: 'Monica',
      comments: [
        {name:'Max', text:'Hi hello hi hello hi hello'},
        {name:'Fix', text:'Hi hello hi hello hi hello'},
        {name:'Dor', text:'Hi hello hi hello hi hello'},
        {name:'Bor', text:'Hi hello hi hello hi hello'},
      ]
    },
  ]
}
