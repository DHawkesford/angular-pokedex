import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeapiHttpService } from "../../services/pokeapi-http.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  pagesArray!: number[];
  currentPage!: string;
  url!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokeapiHttpService: PokeapiHttpService
  ) { };

  ngOnInit(): void {
    // This creates an array of the page numbers required, based on the count of all pokemon from the PokeAPI (e.g. 1154 pokemon => 24 pages)
    this.pokeapiHttpService.getPokemons().subscribe(response => {
      const count = response.count;
      const pages = Math.ceil(count / 50);
      this.pagesArray = [...Array(pages).keys()].map(key => key + 1);
    });

    // this.currentPage is used in the template to highlight the current page number (e.g. https://dangular-pokedex.netlify.app/?page=1)
    this.route.queryParams.subscribe(params => {
      this.currentPage = params['page'];
    });

    // this.url is used in the template to highlight the 1st page number, when on the home page with no queries (i.e. https://dangular-pokedex.netlify.app)
    this.router.events.subscribe(event => {
      this.url = this.router.url;
    });
  };
};
