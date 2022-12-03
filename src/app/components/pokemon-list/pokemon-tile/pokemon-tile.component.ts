import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-tile',
  templateUrl: './pokemon-tile.component.html',
  styleUrls: ['./pokemon-tile.component.scss']
})
export class PokemonTileComponent {
  @Input() pokemon!: { name: string, url: string };
}
