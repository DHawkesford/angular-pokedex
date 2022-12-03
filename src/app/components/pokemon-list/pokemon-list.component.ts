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
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons: any;

  constructor(private http: HttpClient) { }

  private pokemonUrl = "https://pokeapi.co/api/v2/pokemon"

  ngOnInit(): void {
    this.getPokemons();
  }
  
  getPokemons(): void {
    this.http.get<Pokemons>(this.pokemonUrl)
    .subscribe(response => this.pokemons = response.results);    
  };
}
