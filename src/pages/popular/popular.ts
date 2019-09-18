import { ApiKeyProvider } from './../../providers/api-key/api-key';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsMoviePage } from '../details-movie/details-movie';
import { detachEmbeddedView } from '@angular/core/src/view';

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

  moviesArray:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private movie : ApiKeyProvider ) {
    this.loadLetest();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

  loadLetest(){
    this.movie.getMoviespop().subscribe(movies => {
      this.moviesArray = movies['results'];
      console.log(movies);
    });
  }

  getDetails(movie){
    this.navCtrl.push("DetailsMoviePage",movie);
  }
}
