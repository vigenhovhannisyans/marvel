import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpParamsI } from '../../interfaces/http-params';
import { Observable, tap } from 'rxjs';
import { ApiDataI } from '../../interfaces/api-data';
import { addComics } from '../../ngrx/actions/comics.action';
import { ComicsI } from '../../interfaces/comics/comics';

@Injectable({
  providedIn: 'root'
})
export class ComicsService extends BaseService {

  public getComics({ limit, offset }: HttpParamsI): Observable<ApiDataI<ComicsI[]>> {
    return this.http.get<ApiDataI<ComicsI[]>>(`${this.apiURL}/comics`, { params: this.params({ limit }) })
      .pipe(
        tap(e => this.store.dispatch(addComics({ comics: e.data.results })))
      )
  }

  public getComicsById(characterId: number): Observable<ApiDataI<ComicsI>> {
    return this.http.get<ApiDataI<ComicsI>>(`${this.apiURL}/characters/${characterId}`, { params: this.params({ limit: 5 }) });
  }
}
