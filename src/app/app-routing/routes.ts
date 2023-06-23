import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { CartComponent } from '../cart/cart.component';
import { DetailComponent } from '../detail/detail.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'cart',  component: CartComponent },
  { path: 'menu',     component: MenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'aboutus',     component: AboutComponent },
  { path: 'detail',     component: DetailComponent },
];
