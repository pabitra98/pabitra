import { Component, OnInit } from '@angular/core';
import { IProcuct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { error } from 'protractor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
   product: IProcuct;
  constructor(private shopService: ShopService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadProduct();
  }
 loadProduct(){
   this.shopService.getProduct(+this.activeRoute.snapshot.paramMap.get('id')).subscribe(product=>{
     this.product = product;
   }, error=>{
     console.log(error);
   });
 }
}
