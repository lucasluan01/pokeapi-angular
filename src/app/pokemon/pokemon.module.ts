import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';
import { PokemonCartaoComponent } from './pokemon-cartao/pokemon-cartao.component';


@NgModule({
  declarations: [
    PokemonListaComponent,
    PokemonCartaoComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PokemonModule { }
