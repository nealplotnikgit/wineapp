import { Injectable } from '@angular/core';
import {Wine} from './model/wine';
import { HttpClient } from '@angular/common/http';


export abstract class WinesearchServiceInterface {
  abstract getWineDetail(wineID: number): any;
  abstract searchWine(wineID: number, name: string): any;
}

@Injectable({
  providedIn: 'root'
})
export class WinesearchService extends WinesearchServiceInterface {
  serviceClient: HttpClient = null;

  constructor(private httpClient: HttpClient) {
    super();
    this.serviceClient = httpClient;
  }

  getWineDetail(wineId: number): any {
    // detail?id=123
    return wines.find(p => wineId === p.upc);
  }
  searchWine(wineID: number, name: string): any {
    // search?id=123?name  year category

    this.serviceClient.get('/search/123');
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

