import { Component, OnInit } from '@angular/core';
import { WinesearchService } from '../winesearch.service';
import { Wine } from '../model/wine';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

function categoryValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  let valid = false;
  if (value === 'Red' || value === 'White') {
    valid = true;
  }
  return valid ? null : {categoryError: {description: 'Category may be Red or White'}};

}
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
    this.storeFormModel = fb.group({ wineName: ['', Validators.required],
                                  category: ['', categoryValidator],
                                  yearUPC: fb.group({year: [''],
                                                     upc: ['']
                                                    })
                                  });
    }

    get f() { return this.storeFormModel.controls; }
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
    if (this.storeFormModel.valid) {
      console.log(this.storeFormModel.value);
    } else
    {
      console.log('form was invalid');
    }
  }

}
