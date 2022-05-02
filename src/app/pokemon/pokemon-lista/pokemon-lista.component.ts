import { Component, OnInit } from '@angular/core';

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

  optionsNumItems: number[] = [10, 20, 30, 40, 50, 100, 150, 200];
  numItemsPage = 20;
  
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.onPokemons();
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('light');
  }

  onNextPage(): void {
    this.onPokemons(this.nextPage);

  }

  onPreviousPage(): void {
    this.onPokemons(this.previousPage);
  }

  onPokemons(offset: number = 0): void {
    this.service.getInfoBasic(offset, this.numItemsPage).subscribe(
      (dataPage: any) => {
        this.pokemons = dataPage.results;
        this.nextPage = dataPage.next?.split('offset=')[1].split('&limit=')[0];
        this.previousPage = dataPage.previous?.split('offset=')[1].split('&limit=')[0];
      });
  }

  onSearch(param: string): void {
    if(param) {
      this.nextPage = null;
      this.previousPage = null;
        this.service.getOnSearch(param.toLowerCase().trim()).subscribe(
          (dataPage: any) => {
            this.pokemons = [dataPage];
          });
    }
    else {
      this.onPokemons();
    }
  }

  setNumItemsPage(opt: any): void {
    this.numItemsPage = opt.target.value;
    this.onPokemons();
  }

}
