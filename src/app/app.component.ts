import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello world Dynamic'
  numbItem = 42
  arrNumb = [1, 3 ,5]

  // img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
  // img2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

  inputValue= ''
  constructor() {
  //   setTimeout(()=> {
  //     this.img = this.img2;
  //   }, 5000)
  }

  onInput(event: string){
    this.inputValue = event;
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

  onClickBtn(){
    console.log(this.inputValue);
  }
}
