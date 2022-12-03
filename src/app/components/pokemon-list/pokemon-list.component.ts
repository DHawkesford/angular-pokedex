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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=50&offset="

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['page']) {
        this.page = params['page'];
      };
      const offset = 50 * (this.page - 1);
      this.getPokemons(offset);
    });
  }
  
  getPokemons(offset: number): void {
    this.http.get<Pokemons>(this.pokemonUrl + offset)
    .subscribe(response => {
      this.pokemons = response.results
      if (response.results.length === 0) {
        this.router.navigate([''], { queryParams: {page: 24} })
      }
    });  
  };
}
