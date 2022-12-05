import { Component, Input } from '@angular/core';
import { PokeapiHttpService } from "../../../services/pokeapi-http.service";

@Component({
  selector: 'app-pokemon-tile',
  templateUrl: './pokemon-tile.component.html',
  styleUrls: ['./pokemon-tile.component.scss']
})
export class PokemonTileComponent {
  @Input() pokemon!: { name: string, url: string };

  pokemonId!: number;
  pokemonImage!: string;

  constructor(
    private pokeapiHttpService: PokeapiHttpService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }
  
  getPokemon(): void {
    this.pokeapiHttpService.getPokemonByUrl(this.pokemon.url)
    .subscribe(response => {
      this.pokemonId = response.id;
      this.pokemonImage = response.sprites.other["official-artwork"].front_default;
    });    
  };
}
