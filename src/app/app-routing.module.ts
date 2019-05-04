import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'about', component: AboutComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'products', component: ProductsComponent},
                        {path: 'store', component: StoreComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
