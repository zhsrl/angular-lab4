import { Component, OnInit } from '@angular/core';
import { AmazonProduct, amazonProducts } from '../amazon_products';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-amazon-product-details',
  templateUrl: './amazon-product-details.component.html',
  styleUrls: ['./amazon-product-details.component.css']
})
export class AmazonProductDetailsComponent implements OnInit {

  amazonProduct: AmazonProduct | undefined;
  
  constructor(private route: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.amazonProduct = amazonProducts.find((amazonProduct) => amazonProduct.id === productIdFromRoute);
  }

  back(){
    this._location.back();
  }

}
