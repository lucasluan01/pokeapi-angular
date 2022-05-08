import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCartaoComponent } from './pokemon-cartao/pokemon-cartao.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    PokemonCartaoComponent,
    PokemonListaComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    PokemonCartaoComponent,
    PokemonListaComponent
  ]
})
export class PokemonModule { }
