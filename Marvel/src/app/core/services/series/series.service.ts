import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpParamsI } from '../../interfaces/http-params';
import { Observable, tap } from 'rxjs';
import { ApiDataI } from '../../interfaces/api-data';
import { addComics } from '../../ngrx/actions/comics.action';
import { SeriesI } from '../../interfaces/series/series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService extends BaseService {
  
  public getSeries({ limit, offset }: HttpParamsI): Observable<ApiDataI<SeriesI[]>> {
    return this.http.get<ApiDataI<SeriesI[]>>(`${this.apiURL}/series`, { params: this.params({ limit }) })
      .pipe(
        // tap(e => this.store.dispatch(addComics({ comics: e.data.results })))
      )
  }
}
