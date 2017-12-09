import { Component } from '@angular/core';
import { NavController, Platform , NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoapiPage } from '../goapi/goapi';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(private iab: InAppBrowser , public platform: Platform, public navCtrl : NavController) {}

  open(){
    this.navCtrl.push(GoapiPage);
   }

 slides = [
  {
    title: "Welcome to SpyFall ",
    description: "This is show how to play for you !! (This game use internet)",
    image: "assets/imgs/ica-slidebox-img-1.png",
  },
  {
    title: "How to Settings",
    description: "Setting as you want to be for ready to play with your friends.",
    image: "assets/imgs/ica-slidebox-img-2.png",
  },
  {
    title: "How to play",
    description: "Ask a question or talk  to find a spy before time runs out. (Spy don't know locations)",
    image: "assets/imgs/ica-slidebox-img-3.png",
  }
];

}

