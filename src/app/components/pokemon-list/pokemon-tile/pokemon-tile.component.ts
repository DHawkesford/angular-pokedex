import { Component, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface Pokemon {
  abilities: [],
  base_experience: number,
  forms: [],
  game_indices: [],
  height: number,
  held_items: [],
  id: number,
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
  stats: [],
  types: [],
  weight: number
}

@Component({
  selector: 'app-pokemon-tile',
  templateUrl: './pokemon-tile.component.html',
  styleUrls: ['./pokemon-tile.component.scss']
})
export class PokemonTileComponent {
  @Input() pokemon!: { name: string, url: string };

  pokemonId!: string;
  pokemonImage!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemon();
  }
  
  padNumber(id: number) {
    let digits = id.toString().length;
    if (digits === 1) {return `#00${id}`}
    if (digits === 2) {return `#0${id}`}
    return `#${id}`;
  }

  getPokemon(): void {
    this.http.get<Pokemon>(this.pokemon.url)
    .subscribe(response => {
      this.pokemonId = this.padNumber(response.id)
      this.pokemonImage = response.sprites.other["official-artwork"].front_default;
    });    
  };
}
