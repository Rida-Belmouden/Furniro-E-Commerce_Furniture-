import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductsComponent } from "../../components/products/products.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { RangesComponent } from "../../components/ranges/ranges.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ProductsComponent, FooterComponent, RangesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
