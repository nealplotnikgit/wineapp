import { Component, OnInit } from '@angular/core';
import { WinesearchService } from '../winesearch.service';
import { Wine } from '../model/wine';

@Component({
  selector: 'wine-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  wine: Wine;
  constructor(wineSearchService: WinesearchService) {
    this.wine = wineSearchService.getWineDetail(123);
  }

  ngOnInit() {
  }

}
