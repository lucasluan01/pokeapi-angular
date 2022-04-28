import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap, delay, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API = environment.API;

  constructor(private _http: HttpClient) { }

  getListPokemon(): Observable<any> {
    return this._http.get<any>(this.API).pipe(
      // delay(1000),
      // tap(res=> res),
      tap(res => {
        console.log(res)
        res.results.map((pokemon:any) => {
          this.getInfoBasic(pokemon.url).subscribe(
            (infoBasic: any) => pokemon.infoBasic = infoBasic
          );
        })
      })
    )
  }

  getInfoBasic(url: string): Observable<any> {
    return this._http.get<any>(url).pipe( 
      map(
        res => res
      )
    )
  }

  //   return this._http.get(`${this.API}/${id}`);
  // }
}
