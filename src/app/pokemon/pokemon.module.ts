import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';

const pokemonRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailsPokemonComponent},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailsPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
