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
  };
  
  // If the src/assets/images link to the Pokedex logo or the GitHub logo is broken, onImgError will replace the logo with text (refer to the *ngIf directives used in the template)
  onImgError(error: ErrorEvent): void {
    console.error(error);
    const target = error.target as HTMLElement;
    this.brokenImages[target.id] = true;
  }

  openRepo(): void {
    window.open("https://github.com/DHawkesford/angular-pokedex", "_blank");
  }
}
