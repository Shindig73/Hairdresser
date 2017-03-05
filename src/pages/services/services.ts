import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {
 
  public items;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.items = [
		{service: 'Wedding', 	desc: 'Wedding hair'},
		{service: 'Vouchers', 	desc: 'Get your voucher here'},
		{service: 'Sale', 		desc: 'See our winter sale'},
		{service: 'Products', 	desc: 'Current stock'}
	];
	
  }
	
}

