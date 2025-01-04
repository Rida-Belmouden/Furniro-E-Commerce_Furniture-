import { Component } from '@angular/core';
<<<<<<< HEAD
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
=======
import { HeaderComponent } from "../../Components/header/header.component";
import { ProductsComponent } from "../../components/products/products.component";
>>>>>>> 3705d729c185f03c624921c5f3465359fe1aa5e7

@Component({
  selector: 'app-home',
  standalone: true,
<<<<<<< HEAD
  imports: [HeaderComponent, HeroComponent, FooterComponent],
=======
  imports: [HeaderComponent, ProductsComponent],
>>>>>>> 3705d729c185f03c624921c5f3465359fe1aa5e7
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
