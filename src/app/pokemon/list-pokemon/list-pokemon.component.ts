import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: false,
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[] | undefined;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.id]);
  }

  ngOnInit() {
    this.pokemonService.getPokemonList()
    .subscribe(pokemonList => this.pokemonList = pokemonList);
  }
}
