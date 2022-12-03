import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from "rxjs/operators";

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
  name!: string;
  types!: string;
  abilities!: string;
  weight!: string;
  height!: string;
  
  backgroundColourByType: { [key: string]: string } = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
  }

  private pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")!;
    if (isNaN(Number(this.id))) {
      this.router.navigate([''], { queryParams: {page: 1} })
    }
    this.getDetails(this.id);
  }
  
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  padNumber(id: number | string) {
    let digits = id.toString().length;
    if (digits === 1) {return `#00${id}`}
    if (digits === 2) {return `#0${id}`}
    return `#${id}`;
  }

  getDetails(id: string): void {
    this.http
    .get<Pokemon>(this.pokemonUrl + id)
    .pipe(
      catchError(err => {
        this.router.navigate([''], { queryParams: {page: 1} })
        throw 'Error:' + err;
      })
    )
    .subscribe(response => {
      this.details = response
      this.details.image = response.sprites.other["official-artwork"].front_default;
      this.details.id = this.padNumber(response.id)
      this.types = response.types.map(type => 
        type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
      ).join(", ");
      this.abilities = response.abilities.map(ability => 
        ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)
      ).join(", ");
      this.name = response.name.charAt(0).toUpperCase() + response.name.slice(1);
      this.weight = `
        ${(response.weight / 10).toFixed(1)} kg
        (${(response.weight / 10 * 2.205).toFixed(1)} lbs)
      `
      const height: string = (response.height / 10).toFixed(1);
      const inches: number = (response.height / 10) * 39.37;
      const feet: number = Math.floor(inches / 12);
      this.height = `
        ${height} m
        (${feet}'${(inches - feet * 12).toFixed(1)}")
      `
    });     
  };
}
