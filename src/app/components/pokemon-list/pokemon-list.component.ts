import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokeapiHttpService } from "../../services/pokeapi-http.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons: any;
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokeapiHttpService: PokeapiHttpService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['page']) {
        this.page = params['page'];
      };
      const offset = 50 * (this.page - 1);
      this.getPokemons(offset);
    });
  };
  
  getPokemons(offset: number): void {
    this.pokeapiHttpService.getPokemons(offset)
    .subscribe(response => {
      this.pokemons = response.results
      if (response.results.length === 0) {
        this.router.navigate([''], { queryParams: {page: 1} })
      }
    });  
  };
}
