import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@app/model/product';
import { ProductServiceService } from '@app/model/product-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit{
  productId!: number;
  product!: Product;

  constructor(private route: ActivatedRoute, private productService : ProductServiceService) { }

  ngOnInit() {
    this.route.params.subscribe((params: { [x: string]: string | number; }) => {
      this.productId = +params['id']; // Extract product ID from route params
      const product = this.productService.getProductById(this.productId); // Fetch product details using the service
      if (product !== undefined) {
        this.product = product;
      }
    });
  }
}
