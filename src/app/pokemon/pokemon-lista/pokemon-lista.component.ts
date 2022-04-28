import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonService } from './../pokemon.service';

@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.css']
})

export class PokemonListaComponent implements OnInit {

  pokemons: any;
  nextPage: any;
  previousPage: any;

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.service.getListPokemon().subscribe(dados => {
      this.pokemons = dados.results;
      this.nextPage = dados.next?.split('pokemon/')[1];
      this.previousPage = dados.previous?.split('pokemon/')[1];

      console.log(this.nextPage);
      console.log(this.previousPage);
      console.log(this.pokemons)
    });
  }

  next() {
    this.service.getListPokemon(this.nextPage).subscribe(dados => {
      this.pokemons = dados.results;
      this.nextPage = dados.next?.split('pokemon/')[1];
      this.previousPage = dados.previous?.split('pokemon/')[1];
    });
  }

  previous() {
    this.service.getListPokemon(this.previousPage).subscribe(dados => {
      this.pokemons = dados.results;
      this.nextPage = dados.next?.split('pokemon/')[1];
      this.previousPage = dados.previous?.split('pokemon/')[1];
    });
  }

}
