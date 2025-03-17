import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  standalone: false,
  template: `
    <h2 class="center">Ajouter un pokemon </h2>
    <app-pokemon-form *ngIf="pokemon" [pokemon] = "pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
