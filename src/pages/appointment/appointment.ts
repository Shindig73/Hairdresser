import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddappointmentPage } from '../addappointment/addappointment';
import { ViewappPage } from '../viewapp/viewapp';
 
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html'
})
export class AppointmentPage {
  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddappointmentPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
  }
 
viewItem(item){
  this.navCtrl.push(ViewappPage, {
    item: item
  });
}
 
}