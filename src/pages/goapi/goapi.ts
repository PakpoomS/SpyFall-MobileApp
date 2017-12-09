import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';



//@IonicPage()
@Component({
  selector: 'page-goapi',
  templateUrl: 'goapi.html',
})
export class GoapiPage {

  private name;
  private items : any;

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams, public storage:Storage,public alertCtrl: AlertController) {}
  
  ionViewDidLoad(){
   this.storage.get('url').then((val)=>{
   this.items = val;
   });
  }
  
  open1(){
  let browser = this.iab.create('http://'+this.name,'_blank',{zoom:'no',location:'no',suppressesIncrementalRendering:'yes',toolbar:'no'});
  browser.show();
  } 
  open2(items){
  let browser = this.iab.create('http://'+items,'_blank',{zoom:'no',location:'no',suppressesIncrementalRendering:'yes',toolbar:'no'}); 
  }

  open3(){
    let browser = this.iab.create('http://bioservices.sci.psu.ac.th:4000','_blank',{zoom:'no',location:'no',suppressesIncrementalRendering:'yes',toolbar:'no'});
    browser.show();
  } 
  
  save(val){
    this.storage.get('url').then((data) => {
      if(data != null)
      {
        data.push(val);
        this.storage.set('url', data);
      }
      else
      {
        let array = [];
        array.push(val);
        this.storage.set('url', array);
      }
    });
    {
      let alert = this.alertCtrl.create({
        title: 'Save',
        subTitle: 'Save Server Success',
        buttons: ['OK']
      });
      alert.present();
    }
    this.navCtrl.pop();
  };
  delete(){
    this.storage.remove('url');
    this.ionViewDidLoad();
  }
}
