import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logoSrc: string = "../../../assets/images/pokedex-logo.png";
  logoSrcBroken: boolean = false;
  
  repoSrc: string = "../../../assets/images/github-logo.png";
  repoSrcBroken: boolean = false;

  onImgError(error: Event) {
    console.error(error);
    this.logoSrcBroken = true;
  }

  onRepoImgError(error: Event) {
    console.error(error);
    this.logoSrcBroken = true;
  }
}
