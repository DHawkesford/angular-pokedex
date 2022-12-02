import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logoSrc: string = "../../../assets/images/pokedex-logo.png";
  repoSrc: string = "../../../assets/images/github-logo.png";

  brokenImages: { [key: string]: boolean } = {
    logo: false,
    repo: false
  }
  
  onImgError(error: ErrorEvent): void {
    console.error(error);
    const target = error.target as HTMLElement;
    this.brokenImages[target.id] = true;
  }

  openRepo(): void {
    window.open("https://github.com/DHawkesford/angular-pokedex", "_blank");
  }
}
