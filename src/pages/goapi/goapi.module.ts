import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoapiPage } from './goapi';

@NgModule({
  declarations: [
    GoapiPage,
  ],
  imports: [
    IonicPageModule.forChild(GoapiPage),
  ],
})
export class GoapiPageModule {}
