import { ApiKeyProvider } from './../../providers/api-key/api-key';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private keyprovider : ApiKeyProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

 // ionViewWillEnter(){
    //this.refreshNumItem();
       
    //this.bookId=this.navParams.get("bookId");
    //this.bookRestProvider.getbookById(this.bookId).subscribe(book=>{            
     // this.book=book;
    //})
  //}

}
