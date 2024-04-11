import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BaseService } from '../base.service';
import { ApiDataI } from '../../interfaces/api-data';
import { CharacterI } from '../../interfaces/characters/characters';
import { addCharacters } from '../../ngrx/actions/character.action';
import { HttpParamsI } from '../../interfaces/http-params';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends BaseService {

  public getCharacters({ limit, offset }: HttpParamsI): Observable<ApiDataI<CharacterI[]>> {
    return this.http.get<ApiDataI<CharacterI[]>>(`${this.apiURL}/characters`, { params: this.params({ limit }) })
      .pipe(
        tap(e => this.store.dispatch(addCharacters({ character: e.data.results })))
      )
  }

  public getCharacterById(characterId: number): Observable<ApiDataI<CharacterI>> {
    return this.http.get<ApiDataI<CharacterI>>(`${this.apiURL}/characters/${characterId}`, { params: this.params({ limit: 5 }) });
  }

}
