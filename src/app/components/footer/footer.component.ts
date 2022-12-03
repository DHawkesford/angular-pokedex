import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

interface Pokemons {
  count: number;
  next: string | boolean;
  previous: string | boolean;
  results: { name: string, url: string }[];
  test: number;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  pagesArray!: number[];
  currentPage!: string;

  private pokemonUrl = "https://pokeapi.co/api/v2/pokemon"

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {};

  ngOnInit(): void {
    this.getPages();
    this.route.queryParams.subscribe(params => {
      this.currentPage = params['page']
    });
  }
  
  getPages(): void {
    this.http.get<Pokemons>(this.pokemonUrl)
    .subscribe(response => {
      const count = response.count;
      const pages = Math.ceil(count / 50);
      this.pagesArray = [...Array(pages).keys()];
    });    
  };
}
