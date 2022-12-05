import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNumber'
})
export class PokemonNumberPipe implements PipeTransform {
  // Adds a leading # and 0s to the pokemon's number, e.g. 1 => #001, 12 => #012, 123 => #123, 1234 => #1234
  transform(value: number): string {
    if (value !== undefined) {
      let digits = value.toString().length;
      if (digits === 1) { return `#00${ value }` };
      if (digits === 2) { return `#0${ value }` };
    }
    return `#${ value }`;
  };
};
