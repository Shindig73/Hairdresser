import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { PricePage } from '../pages/price/price';
import { OpeningPage } from '../pages/opening/opening';
import { GalleryPage } from '../pages/gallery/gallery';
import { TeamPage } from '../pages/team/team';
import { ServicesPage } from '../pages/services/services';
import { AddappointmentPage } from '../pages/addappointment/addappointment';
import { AppointmentPage } from '../pages/appointment/appointment';
import { ViewappPage } from '../pages/viewapp/viewapp';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	ContactPage,
	PricePage,
	OpeningPage,
	GalleryPage,
	TeamPage,
	ServicesPage,
	AddappointmentPage,
	AppointmentPage,
	ViewappPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	ContactPage,
	PricePage,
	OpeningPage,
	GalleryPage,
	TeamPage,
	ServicesPage,
	AddappointmentPage,
	AppointmentPage,
	ViewappPage
  ],
  providers: []
})
export class AppModule {}
