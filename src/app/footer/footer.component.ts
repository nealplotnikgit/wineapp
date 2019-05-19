import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wine-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(formData: any) {
    console.log(formData);
  }
}
