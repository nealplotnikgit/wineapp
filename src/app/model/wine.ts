
export interface WineInterface {
 upc: number;  // 12 digit id
 name: string;
 price: number;
 cost: number;
 vintageYear: number;
 vintner: string;
 category: string;
}

export class Wine implements WineInterface {
   upc: number;  // 12 digit id
   name: string;
   price: number;
   cost: number;
   vintageYear: number;
   vintner: string;
   category: string;

   constructor (upc: number, name: string, price: number, cost: number, vintageYear: number, vintner: string, category: string){
     this.upc = upc;
     this.name = name;
     this.price = price;
     this.cost = cost;
     this.vintageYear = vintageYear;
     this.vintner = vintner;
     this.category = category;
    }

}
