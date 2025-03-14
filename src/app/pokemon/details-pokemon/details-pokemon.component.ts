import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  standalone: false,
  templateUrl: './details-pokemon.component.html',
  styles: ``
})
export class DetailsPokemonComponent implements OnInit{

  pokemonList: Pokemon[] | undefined;
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string | null= this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }

  goToPokemonList() {
    this.router.navigate(['pokemons']);
  }

}
