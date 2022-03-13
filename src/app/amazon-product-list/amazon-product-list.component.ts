import { Component, OnInit } from '@angular/core';
import { amazonProducts } from '../amazon_products';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-amazon-product-list',
  templateUrl: './amazon-product-list.component.html',
  styleUrls: ['./amazon-product-list.component.css'],
})
export class AmazonProductListComponent implements OnInit {
  amazonProducts = amazonProducts;

  productShare() {}

  productNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor() {}

  ngOnInit(): void {}
}
