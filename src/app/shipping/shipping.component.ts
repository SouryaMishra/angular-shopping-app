import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService, private location: Location) {}

  shippingPrices!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingPrices = this.cartService.getShippingPrices();
  }

  goBack() {
    this.location.back();
  }
}
