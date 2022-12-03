import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface Pokemons {
  count: number;
  next: string | boolean;
  previous: string | boolean;
  results: { name: string, url: string }[];
  test: number;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons: any;
  page: number = 1;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  private pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=50&offset="

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['page']) {
        this.page = params['page'];
      };
    });
    this.pokemonUrl += `${50 * (this.page - 1)}`
    this.getPokemons();
  }
  
  getPokemons(): void {
    this.http.get<Pokemons>(this.pokemonUrl)
    .subscribe(response => this.pokemons = response.results);    
  };
}
