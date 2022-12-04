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
  ) {};

  ngOnInit(): void {
    this.pokeapiHttpService.getPokemons().subscribe(response => {
      console.log(response);
      const count = response.count
      const pages = Math.ceil(count / 50);
      this.pagesArray = [...Array(pages).keys()];
    })
    this.router.events.subscribe(event => {
      this.url = this.router.url;
    });
    this.route.queryParams.subscribe(params => {
      this.currentPage = params['page']
    });
  }
};
