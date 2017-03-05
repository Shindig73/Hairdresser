import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {}

  fbShare() {
	SocialSharing.shareViaFacebook(null, null, 'https://www.facebook.com').then(() => {
  // Success!
}).catch(() => {
  // Error!
});
  }

}
