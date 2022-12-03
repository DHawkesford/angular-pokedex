import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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

  private pokemonUrl = "https://pokeapi.co/api/v2/pokemon"

  constructor(
    private http: HttpClient,
  ) {};

  ngOnInit(): void {
    this.getPages();
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
