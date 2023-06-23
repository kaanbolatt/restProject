import { Component, OnInit, Inject } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  products: Promotion[];
  productId: number;
  product: Promotion;
    basket: number[] = [];

  constructor(@Inject('BaseURL') private BaseURL, public router: Router, private _snackBar: MatSnackBar, private dataService: DataService, private activatedRouter: ActivatedRoute) {
    this.products = PROMOTIONS;
  }
  ngOnInit() {
    this.productId = Number(this.activatedRouter.queryParams['_value'].prodId)
    this.product = this.products.find(x => x.id == this.productId);
    console.log("🚀 ~ file: detail.component.ts:23 ~ DetailComponent ~ ngOnInit ~ this.product:", this.product)

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
