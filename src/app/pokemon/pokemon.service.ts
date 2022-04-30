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


  // getPage(offset: number = 0, limit: number = 30): Observable<any> {
  //   return this._http.get<any>(`${this.API}?offset=${offset}&limit=${limit}`)
  // }

  getPage(url: string): Observable<any> {
    return this._http.get<any>(url)
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

  getInfoBasic(url: string = this.API): Observable<any> {
    return this.getPage(url).pipe(
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
              }
            )
          }
        )
      })
    );
  }

}

