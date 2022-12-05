import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonHeight'
})
export class PokemonHeightPipe implements PipeTransform {
  // Formats the height of a pokemon, e.g. 11 => 1.1m (3'7.3")
  // The value from the PokeAPI is divided by 10 as it should contain a decimal point
  transform(value: number): string {
    const metresHeight: string = (value / 10).toFixed(1);

    const inches: number = (value / 10) * 39.37;
    const feet: number = Math.floor(inches / 12);

    return `${metresHeight} m (${feet}'${(inches - feet * 12).toFixed(1)}")`;
  };
};
