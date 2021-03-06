import { Injectable } from '@angular/core';
import {Wine} from './model/wine';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';


export abstract class WinesearchServiceInterface {
  abstract getWineDetail(wineID: number): any;
  abstract searchWineFuture(wineID: number, name: string): any;
  abstract searchWine(name: string): any;
}

@Injectable({
  providedIn: 'root'
})
export class WinesearchService extends WinesearchServiceInterface {
  wineServiceUrl = environment.wineServiceURL;

  serviceClient: HttpClient = null;
  // baseUrl = 'localhost:8080';
  constructor(private httpClient: HttpClient) {
    super();
    this.serviceClient = httpClient;
  }

  getWineDetail(wineId: number): any {
    // detail?id=123
    return wines.find(p => wineId === p.upc);
  }

  searchWine(name: string): any {
    // replace with new API - search by name, match any containing and ignore case
    console.log('search by name');
  // return this.serviceClient.get(/*this.baseUrl+*/'/wines/name/' + name);
 return this.serviceClient.get(this.wineServiceUrl + '/wines/name/' + name);
}


  searchWineFuture(wineID: number, name: string): any {
    // search?id=123?name  year category
    console.log('service 3');
   // return this.serviceClient.get(/*this.baseUrl+*/'/search?id=82491091026');
   return this.serviceClient.get(this.wineServiceUrl + '/search?id=82491091026');
   // https://mockoon.com/
  // return this.serviceClient.get('http://www.mocky.io/v2/5d12d4220e00002c17b4a0a7');
  }

}


  const wines = [
  { upc: 0,
    name: 'test',
    vintageYear: 1996,
    price: 10.25,
    cost: 9.50,
    vintner: 'mad winwes',
    category: 'red'
},
{ upc: 1,
  name: 'test2',
  vintageYear: 1997,
  price: 15.25,
  cost: 7.50,
  vintner: 'mad wines',
  category: 'white'
},
{ upc: 123,
  name: 'test3',
  vintageYear: 1997,
  price: 15.25,
  cost: 7.50,
  vintner: 'mad wines',
  category: 'white'
}
];

