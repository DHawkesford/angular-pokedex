import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonWeight'
})
export class PokemonWeightPipe implements PipeTransform {
  transform(value: number): string {
    const kgWeight = (value / 10).toFixed(1);
    const lbsWeight = (value / 10 * 2.205).toFixed(1);
    return `${kgWeight} kg (${lbsWeight} lbs)`;
  };
};
