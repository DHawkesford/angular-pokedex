import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DetailedPokemonComponent } from './components/detailed-pokemon/detailed-pokemon.component';
import { PokeapiHttpService } from './services/pokeapi-http.service';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  // { path: 'pokemon/:id', component: DetailedPokemonComponent },
  { path: 'pokemon/:id', component: DetailedPokemonComponent, resolve: { pokemon: PokeapiHttpService} },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
