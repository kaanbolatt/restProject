import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private cartData: number[];

  constructor() {}

  setSharedData(data: number[]): void {
    this.cartData = data;
  }

  getSharedData(): number[] {
    return this.cartData;
  }
}