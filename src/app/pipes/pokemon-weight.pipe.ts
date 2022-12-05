import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonWeight'
})
export class PokemonWeightPipe implements PipeTransform {
  // Formats the weight of a pokemon, e.g. 700 => 70.0 kg (154.3 lbs)
  // The value from the PokeAPI is divided by 10 as it should contain a decimal point
  transform(value: number): string {
    const kgWeight = (value / 10).toFixed(1);
    const lbsWeight = (value / 10 * 2.205).toFixed(1);
    return `${kgWeight} kg (${lbsWeight} lbs)`;
  };
};
