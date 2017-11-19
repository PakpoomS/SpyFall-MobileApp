import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private iab: InAppBrowser,public platform: Platform) {
    platform.ready().then(() => {
     let browser = this.iab.create('https://www.youtube.com','_blank',{zoom:'no',location:'no'});
    
     browser.show();
    
     
   });

  
 }

}
