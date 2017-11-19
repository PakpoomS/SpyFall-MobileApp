import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(private iab: InAppBrowser , public platform: Platform) {}

  open(){
    let browser = this.iab.create('http://spyfall.adrianocola.com','_blank',{zoom:'no',location:'no',suppressesIncrementalRendering:'yes',toolbar:'no'});
    browser.show();
   }

 slides = [
  {
    title: "Welcome to SpyFall ",
    description: "This is Show how to play for you !!",
    image: "assets/imgs/ica-slidebox-img-1.png",
  },
  {
    title: "What is Ionic?",
    description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
    image: "assets/imgs/ica-slidebox-img-2.png",
  },
  {
    title: "What is Ionic Cloud?",
    description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
    image: "assets/imgs/ica-slidebox-img-3.png",
  }
];

}

