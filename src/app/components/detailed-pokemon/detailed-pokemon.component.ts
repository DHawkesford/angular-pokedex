import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

interface Pokemon {
  abilities: { ability: { name: string, url: string }}[],
  base_experience: number,
  forms: [],
  game_indices: [],
  height: number,
  held_items: [],
  id: number | string,
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

@Component({
  selector: 'app-detailed-pokemon',
  templateUrl: './detailed-pokemon.component.html',
  styleUrls: ['./detailed-pokemon.component.scss']
})
export class DetailedPokemonComponent {
  details: Pokemon = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    image: "Placeholder text",
    is_default: true,
    location_area_encounters: "Placeholder text",
    moves: [],
    name: "Placeholder text",
    order: 0,
    past_types: [],
    species: {
      name: "Placeholder text",
      url: "Placeholder text"
    },
    sprites: {
      other: {
        "official-artwork": {
          front_default: "Placeholder text"
        }
      }
    },
    stats: [],
    types: [],
    weight: 0
  }
  id!: string | null;
  
  private pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.getDetails(this.id);
  }
  
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  padNumber(id: number | string) {
    let digits = id.toString().length;
    if (digits === 1) {return `#00${id}`}
    if (digits === 2) {return `#0${id}`}
    return `#${id}`;
  }

  getDetails(id: string): void {
    this.http.get<Pokemon>(this.pokemonUrl + id)
    .subscribe(response => {
      this.details = response
      this.details.image = response.sprites.other["official-artwork"].front_default;
      this.details.id = this.padNumber(response.id)
      // this.pokemonImage = response.sprites.other["official-artwork"].front_default;
    });    
  };
}
