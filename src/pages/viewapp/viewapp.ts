import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-viewapp',
  templateUrl: 'viewapp.html'
})
export class ViewappPage {
 
  title;
  description;
  stylist;
  today;
  appTime;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
	this.stylist = this.navParams.get('item').stylist;
	this.today = this.navParams.get('item').today;
	this.appTime = this.navParams.get('item').appTime;
  }
 
}
