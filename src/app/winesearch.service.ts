import { Injectable } from '@angular/core';
import {Wine} from './model/wine';
import { HttpClient } from '@angular/common/http';


export abstract class WinesearchServiceInterface {
  abstract getWineDetail(wineID: number): Wine;
  abstract searchWine(wineID: number, name: string): Wine[];
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

  getWineDetail(wineId: number): Wine {
    // detail?id=123
    return wines.find(p => wineId === p.upc);
  }
  searchWine(wineID: number, name: string): Wine[] {
    // search?id=123?name  year category

    if (wineID == null && name == null) {
       throw new Error('Missing Required Inputs');
    }
    return wines;
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

