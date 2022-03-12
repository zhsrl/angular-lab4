import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-prodct-details',
  templateUrl: './prodct-details.component.html',
  styleUrls: ['./prodct-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product){
    window.alert('This item has been added to the cart');
    this.cartService.addToCart(product);
  }
}
