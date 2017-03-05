import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppointmentPage } from '../appointment/appointment';
import { ContactPage } from '../contact/contact';
import { PricePage } from '../price/price';
import { OpeningPage } from '../opening/opening';
import { GalleryPage } from '../gallery/gallery';
import { TeamPage } from '../team/team';
import { ServicesPage } from '../services/services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToAppoint() { this.navCtrl.push(AppointmentPage); }
  goToContact() { 	this.navCtrl.push(ContactPage); }
  goToPrice() { this.navCtrl.push(PricePage); }
  goToOpening() { this.navCtrl.push(OpeningPage); }
  goToGallery() { this.navCtrl.push(GalleryPage); }
  goToTeam() { this.navCtrl.push(TeamPage); }
  goToServices() { this.navCtrl.push(ServicesPage); }
}
