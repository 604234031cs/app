import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiKeyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiKeyProvider {

    private url ="https://api.themoviedb.org/3/movie/popular?api_key=64967cbb93bd655df94b015919807ec0";

  constructor(public http: HttpClient) {
    console.log('Hello ApiKeyProvider Provider');
  }

}
