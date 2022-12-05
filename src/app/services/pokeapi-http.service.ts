import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

interface Pokemons {
  count: number;
  next: string | boolean;
  previous: string | boolean;
  results: { name: string, url: string }[];
  test: number;
}

interface Pokemon {
  abilities: { ability: { name: string, url: string }}[],
  base_experience: number,
  forms: [],
  game_indices: [],
  height: number,
  held_items: [],
  id: number,
  image: string,
  is_default: true,
  location_area_encounters: string,
  moves: [],
  name: string,
  order: number,
  past_types: [],
  species: {
    name: string,
    url: string
  },
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  },
  stats: { base_stat: number, stat: { name: string } }[],
  types: { slot: number, type: { name: string, url: string}}[],
  weight: number
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiHttpService {
  pokemons!: Pokemons;
  private pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(
    private http: HttpClient,
  ) {}

  getPokemons(offset: number = 0): Observable<Pokemons> {
    const options = {
      params: new HttpParams().set('limit', '50').set('offset', offset)
    };
    return this.http.get<Pokemons>(this.pokemonUrl, options);
  };

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.pokemonUrl + '/' + id);
  };

  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  };
};