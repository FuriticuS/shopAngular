import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostComponent} from "./post/post.component";
import { PostTwoComponent } from './post-two/post-two.component';
import { PostThreeComponent } from './post-three/post-three.component';
import {PostFourComponent} from "./post-four/postFour.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostTwoComponent,
    PostThreeComponent,
    PostFourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
