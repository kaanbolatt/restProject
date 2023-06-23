import { Component, OnInit, Inject } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: Promotion[];

  basket: number[] = [];

  constructor(@Inject('BaseURL') private BaseURL, public router: Router, private _snackBar: MatSnackBar, private dataService: DataService) {
    this.products = PROMOTIONS;
    console.log("🚀 ~ file: menu.component.ts:15 ~ MenuComponent ~ constructor ~ this.products:", this.products)
  }
  ngOnInit() {

  }


  gotoDetail(prodId: number) {
    this.router.navigate(['/detail'], { queryParams: { prodId: prodId } });

  }

  addBasket(prodId: number) {
    this.basket.push(prodId);
    this._snackBar.open('Product successfully added to cart', 'Success!', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.dataService.setSharedData(this.basket);
  }


}
