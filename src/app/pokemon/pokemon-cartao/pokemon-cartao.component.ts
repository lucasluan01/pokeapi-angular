import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-cartao',
  templateUrl: './pokemon-cartao.component.html',
  styleUrls: ['./pokemon-cartao.component.css']
})
export class PokemonCartaoComponent implements OnInit {

  @Input()
  nomePokemon: string = "";

  @Input()
  imagemPokemon: string = "";

  @Input()
  tipoPokemon: string = "";

  @Input()
  idPokemon: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
