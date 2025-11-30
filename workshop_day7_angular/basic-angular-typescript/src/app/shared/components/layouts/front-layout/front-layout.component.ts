import { Component } from '@angular/core';
import { NavbarComponent } from '../../navigation/navbar/navbar.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-front-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.css'
})
export class FrontLayoutComponent {

}
