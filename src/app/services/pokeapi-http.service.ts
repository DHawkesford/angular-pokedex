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

@Injectable({
  providedIn: 'root'
})
export class PokeapiHttpService {
  pokemons!: Pokemons;
  count!: number;
  private pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(
    private http: HttpClient,
  ) {}

  getPokemons(offset: number = 0): Observable<Pokemons> {
    const options = {
      params: new HttpParams().set('limit', '50').set('offset', offset)
    }

    return this.http.get<Pokemons>(this.pokemonUrl, options)
  };
}