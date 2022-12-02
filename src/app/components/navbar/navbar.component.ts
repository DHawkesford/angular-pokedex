import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logoSrc: string = "../../../assets/images/pokedex-logo.png";
  logoSrcBroken: boolean = false;

  onImgError(error: Event) {
    console.error(error);
    this.logoSrcBroken = true;
  }
}
