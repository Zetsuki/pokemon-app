import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-details-pokemon',
  standalone: false,
  templateUrl: './details-pokemon.component.html',
  styles: ``
})
export class DetailsPokemonComponent implements OnInit{

  pokemonList: Pokemon[] = POKEMONS;
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const pokemonId: string | null= this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    } else {
      this.pokemon = undefined;
    }
  }

  goToPokemonList() {
    this.router.navigate(['pokemons']);
  }

}
