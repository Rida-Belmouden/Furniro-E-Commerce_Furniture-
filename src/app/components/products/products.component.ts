import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent{
  // Tracks the visibility of the Overlay div
  showOverlay: boolean[] = [false];

  private apiUrl = 'http://localhost:4200/db/products.json';
  private http = inject(HttpClient);
  products: any[] = [];

  constructor() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get(this.apiUrl).subscribe((res) => {
      this.products = res as any[];
    });
  }
}

