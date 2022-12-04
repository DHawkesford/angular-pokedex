import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNumber'
})
export class PokemonNumberPipe implements PipeTransform {
  transform(value: number): string {
    if (value !== undefined) {
      let digits = value.toString().length;
      if (digits === 1) { return `#00${ value }` };
      if (digits === 2) { return `#0${ value }` };
    }
    return `#${ value }`;
  };
};
