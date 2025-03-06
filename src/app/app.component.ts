import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1><router-outlet />`,
  standalone: false,
  styles: []
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(POKEMONS[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur ${pokemon.name}`);
  }
}
