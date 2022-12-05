import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from "rxjs/operators";
import { PokeapiHttpService } from "../../services/pokeapi-http.service";

@Component({
  selector: 'app-detailed-pokemon',
  templateUrl: './detailed-pokemon.component.html',
  styleUrls: ['./detailed-pokemon.component.scss']
})
export class DetailedPokemonComponent {
  id!: string;
  pokemonId!: number;
  name!: string;
  image!: string;
  types!: string;
  abilities!: string[];
  stats!: { base_stat: number, stat: { name: string } }[];
  weight!: number;
  height!: number;
  backgroundColourByType!: string;

  typeColours: { [key: string]: string } = {
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

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")!;
    if (isNaN(Number(this.id))) {
      this.router.navigate([''], { queryParams: {page: 1} })
    }
    this.getDetails(this.id);
  }
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokeapiHttpService: PokeapiHttpService
  ) {}

  getDetails(id: string): void {
    this.pokeapiHttpService.getPokemonById(id)
    .pipe(
      catchError(err => {
        this.router.navigate([''], { queryParams: {page: 1} })
        throw 'Error:' + err;
      })
    )
    .subscribe(response => {
      this.pokemonId = response.id
      this.name = response.name
      this.image = response.sprites.other["official-artwork"].front_default;
      this.types = response.types.map(type => type.type.name).join(", ");
      this.abilities = response.abilities.map(ability => ability.ability.name);
      this.stats = response.stats
      this.weight = response.weight
      this.height = response.height
      this.backgroundColourByType = this.typeColours[response.types[0].type.name]
    });     
  };
}
