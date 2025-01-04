import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  products = [
    {
      "title": "Syltherine",
      "img": "",
      "category": "Stylish cafe chair",
      "realPrice": "3.500.000",
      "price": "Rp 2.500.00"
    },
    {
      "title": "Leviosa",
      "img": "",
      "category": "Stylish cafe chair",
      "realPrice": "",
      "price": "Rp 2.500.000"
    },
    {
      "title": "Lolito",
      "img": "",
      "category": "Luxury big sofa",
      "realPrice": "Rp 14.000.000",
      "price": "Rp 7.000.000"
    }
  ]

  keys(): Array<any> {
    console.log(Object.entries(this.products))
    return Object.entries(this.products);
  }

}

