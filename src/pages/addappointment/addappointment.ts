import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
 
@Component({
  selector: 'page-addappointment',
  templateUrl: 'addappointment.html'
})
export class AddappointmentPage {
 
  title;
  description;
  stylist;
  today;
  appTime = '09:30';
 
  constructor(public navCtrl: NavController, public view: ViewController) {
 
  }

  ionViewDidLoad() {
    this.today = new Date().toISOString();
  }
  
  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description,
	  stylist: this.stylist,
	  today: this.today,
	  appTime: this.appTime
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }
 
}