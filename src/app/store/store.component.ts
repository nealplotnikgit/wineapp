import { Component, OnInit } from '@angular/core';
import { WinesearchService } from '../winesearch.service';
import { Wine } from '../model/wine';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

function searchGroupValidator(control: FormControl): {[key: string]: any} {
  if (control === null) {
    return null; // these need to return null or an error message
  }
  const year: string = control.get('year').value || '';
  console.log('year' + year);
  const UPC: string = control.get('upc').value || '';
  console.log('UPC' + UPC);
  let valid = true;
  if (year === '' && UPC === '') {
    valid = false;
  }
  return valid ? null : {searchGroupError: {description: 'Either year OR UPC must be chosen'}};
}
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
    this.wines = wineSearchService.searchWine(123, 'Fred wine');

    this.storeFormModel = fb.group({ wineName: ['', Validators.required],
                                  category: ['', categoryValidator],
                                  yearUPC: fb.group({year: [''], upc: ['']}, { validator: searchGroupValidator, updateOn: 'submit'})
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
