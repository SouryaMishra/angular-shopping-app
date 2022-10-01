import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import type { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private http: HttpClient) {}
  items: Product[] = [];

  addToCart(item: Product) {
    if (!this.items.find((i) => i.id === item.id)) {
      this.items.push(item);
      return true;
    }
    return false;
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<{ type: string; price: number }[]> {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
