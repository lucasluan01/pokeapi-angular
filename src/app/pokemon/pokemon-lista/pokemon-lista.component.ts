import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

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
    this.onPokemons();
    this.toggleDarkTheme();
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark');
  }

  onNextPage(): void {
    this.onPokemons(this.nextPage);

  }

  onPreviousPage(): void {
    this.onPokemons(this.previousPage);
  }

  onPokemons(url?: string): void {
    this.service.getInfoBasic(url).subscribe(
      (dataPage: any) => {
        this.pokemons = dataPage.results;
        this.nextPage = dataPage.next;
        this.previousPage = dataPage.previous;
      });
  }
}
