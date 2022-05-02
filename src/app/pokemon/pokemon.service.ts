import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API = environment.API;
  private _nexPage: any;
  private _previousPage: any;

  constructor(private _http: HttpClient) { }

  getPage(offset: number, limit: number): Observable<any> {
    return this._http.get<any>(`${this.API}?offset=${offset}&limit=${limit}`)
  }

  getNextPage(): string {
    return this._nexPage;
  }

  getPreviousPage(): string {
    return this._previousPage;
  }

  getPokemon(pokemon: string): Observable<any> {
    return this._http.get<any>(`${this.API}/${pokemon}`);
  }

  getInfoBasic(offset: number, limit: number): Observable<any> {
    return this.getPage(offset, limit).pipe(
      tap(dataPage => {
        this._nexPage = dataPage.next;
        this._previousPage = dataPage.previous;
        dataPage.results.map(
          (pokemon: any) => {
            this.getPokemon(pokemon.name).subscribe(
              (infoBasic: any) => {
                pokemon.id = infoBasic['id'];
                pokemon.type = infoBasic['types'][0]['type']['name'];
                pokemon.image = infoBasic['sprites']['other']['dream_world']['front_default'];
                pokemon.baseStats = {
                  hp: infoBasic['stats'][0]['base_stat'],
                  attack: infoBasic['stats'][1]['base_stat'],
                  defense: infoBasic['stats'][2]['base_stat'],
                  specialAttack: infoBasic['stats'][3]['base_stat'],
                  specialDefense: infoBasic['stats'][4]['base_stat'],
                  speed: infoBasic['stats'][5]['base_stat']
                };
              }
            )
          }
        )
        console.log(dataPage);
      })
    );
  }

  getOnSearch(url: string): Observable<any> {
    this._nexPage = null;
    this._previousPage = null;
    return this.getPokemon(url).pipe(
      tap(pokemon => {
        pokemon.id = pokemon['id'];
        pokemon.type = pokemon['types'][0]['type']['name'];
        pokemon.image = pokemon['sprites']['other']['dream_world']['front_default'];
        pokemon.name = pokemon['name'];
        pokemon.baseStats = {
          hp: pokemon['stats'][0]['base_stat'],
          attack: pokemon['stats'][1]['base_stat'],
          defense: pokemon['stats'][2]['base_stat'],
          specialAttack: pokemon['stats'][3]['base_stat'],
          specialDefense: pokemon['stats'][4]['base_stat'],
          speed: pokemon['stats'][5]['base_stat']
        };
      })
    );
  }

}

