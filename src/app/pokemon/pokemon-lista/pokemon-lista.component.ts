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
      this.nextPage = dados.next;
      this.previousPage = dados.previous;

      console.log(this.nextPage);
      console.log(this.previousPage);
      console.log(this.pokemons)
    });
  }

}
