import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonHeight'
})
export class PokemonHeightPipe implements PipeTransform {
  transform(value: number): string {
    const metresHeight: string = (value / 10).toFixed(1);

    const inches: number = (value / 10) * 39.37;
    const feet: number = Math.floor(inches / 12);

    return `${metresHeight} m (${feet}'${(inches - feet * 12).toFixed(1)}")`;
  };
};
