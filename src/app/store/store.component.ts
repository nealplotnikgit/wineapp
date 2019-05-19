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
  wines: Wine[];

  constructor(wineSearchService: WinesearchService) {
    this.wine = wineSearchService.getWineDetail(123);
    this.wines = wineSearchService.searchWine(123, 'xy');
  }

  ngOnInit() {
  }

  onSubmit(formData: any) {
    console.log(formData);
  }

}
