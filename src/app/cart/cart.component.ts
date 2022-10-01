import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  cartItems = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  clearCart() {
    const confirmation = window.confirm(
      'Are you sure you want to clear your cart?'
    );
    if (confirmation) this.cartItems = this.cartService.clearItems();
  }

  onSubmit() {
    const { name, address } = this.checkoutForm.value;
    if (name?.trim() === '' || address?.trim() === '') return;
    this.cartItems = this.cartService.clearItems();
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert('Your order has been placed!');
    this.router.navigate(['/']);
  }
}
