# Wineapp - manage and view wine wholesale

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


https://medium.com/@davembush/adding-css-and-javascript-to-an-angular-cli-project-2b843a8283f3

https://scotch.io/courses/build-your-first-angular-website/adding-an-imagelogo-in-ang
ular

https://github.com/angular/angular/issues/11404

https://stackoverflow.com/questions/53143983/angular-7-and-cant-bind-to-routerlink-since-it-isnt-a-known-property-of-a

https://www.techiediaries.com/angular-by-example-httpclient-get/
// other Alternative to get data
    The async pipe and Observables
In our example, We can access the data returned by the get() method in two ways.

Subscribe to the returned Observable, i.e:

     get_products(){
        this.httpClient.get(this.baseUrl + '/products').subscribe((res : any[])=>{
            console.log(res);
            this.products = res;
        });
    }
Or use the async pipe with the returned Observable and iterate directly over data in the template. Let's see how in more details.

First, you need to create an Observable using the following:

     private productsObservable : Observable<any[]> ; 
Next, call the get() method and assign the result to productsObservable:

     this.productsObservable = this.httpClient.get(this.baseUrl + '/products');
Finally, in your template:

      <li *ngFor="let product of productsObservable | async" >
        -- id: {{product.id}}
        -- name: {{product.name}}
        -- cost: {{product.cost}}
        -- quantity: {{product.quantity}}
      </li>
    
