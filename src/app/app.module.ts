import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonTileComponent } from './components/pokemon-list/pokemon-tile/pokemon-tile.component';
import { DetailedPokemonComponent } from './components/detailed-pokemon/detailed-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonTileComponent,
    DetailedPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
