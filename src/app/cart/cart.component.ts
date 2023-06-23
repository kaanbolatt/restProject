import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: number[];
  products: Promotion[];
  basketItems: any[] = [];
  totalProductPrice = 0;
  totalAmountVAT = 0;
  totalService = 0;
  totaDiscount = 0
  constructor(
    @Inject('BaseURL') private BaseURL, private dataService: DataService) {
    this.products = PROMOTIONS;
  }

  ngOnInit() {
    this.items = this.dataService.getSharedData();
    if (this.items != undefined) {
      this.items.forEach(element => {
        this.basketItems.push(this.products.find(x => x.id == element))
      });
      this.total();
      console.log("🚀 ~ file: cart.component.ts:26 ~ CartComponent ~ ngOnInit ~ this.basketItems:", this.basketItems)
    }
  }

  total() {
    this.totalProductPrice = 0;
    this.basketItems.forEach(element => {
      this.totalProductPrice += Number(element.price);
    });
    this.totalService = (this.totalProductPrice  / 10) + this.totalProductPrice;
    console.log("🚀 ~ file: cart.component.ts:36 ~ CartComponent ~ totalAmount ~ totalAmount:", this.totalProductPrice)
    if(this.totalService > 40){
      this.totaDiscount = this.totalService - ((this.totalService * 15) / 100);
    }else{
      this.totaDiscount = 0;
    }
    this.totalAmountVAT = this.totaDiscount != 0 ? this.totaDiscount : this.totalService;
  }



}
