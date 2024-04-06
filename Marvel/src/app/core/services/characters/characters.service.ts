import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BaseService } from '../../base.service';
import { ApiDataI } from '../../interfaces/api-data';
import { CharacterI } from '../../interfaces/characters/characters';
import { addCharacters } from '../../ngrx/actions/character.action';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends BaseService {
  
  public getCharacters(): Observable<ApiDataI<CharacterI[]>> {
    return this.http.get<ApiDataI<CharacterI[]>>(`${this.apiURL}/characters`, {params: this.params()})
            .pipe(
              tap(e => this.store.dispatch(addCharacters({character: e.data.results})))
            )
  }


}
