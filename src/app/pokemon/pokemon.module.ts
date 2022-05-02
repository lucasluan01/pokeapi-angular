import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCartaoComponent } from './pokemon-cartao/pokemon-cartao.component';


@NgModule({
  declarations: [
    PokemonCartaoComponent,
    PokemonListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonCartaoComponent,
    PokemonListaComponent
  ]
})
export class PokemonModule { }
