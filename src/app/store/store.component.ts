import { Component, OnInit } from '@angular/core';
import { WinesearchService } from '../winesearch.service';
import { Wine } from '../model/wine';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'wine-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  wine: Wine;
  wines: Wine[];
  storeFormModel: FormGroup;


  constructor(wineSearchService: WinesearchService, fb: FormBuilder) {
    this.wine = wineSearchService.getWineDetail(123);
    this.wines = wineSearchService.searchWine(123, 'xy');
    this.storeFormModel = fb.group({name: [''],
                                  category: [''],
                                  yearUPC: fb.group({year: [''],
                                                     upc: ['']
                                                    })
                                  });
    }
    /*  this.storeFormModel = new FormGroup({
      name: new FormControl(),
      category: new FormControl(),
      yearUPC: new FormGroup({
          year: new FormControl(),
          upc: new FormControl()
        })
      });
  } */

  ngOnInit() {
  }

  onSubmit(formData: any) {
    console.log(this.storeFormModel.value);
  }

}
