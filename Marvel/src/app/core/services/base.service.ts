import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { md5 } from 'js-md5';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public readonly http: HttpClient = inject(HttpClient);
  public readonly store: Store = inject(Store);
  public readonly ts: number = new Date().getTime()
  public readonly apiURL: string = environment.apiUrl;
  public readonly apiKey: string = environment.publicKey;
  public readonly privateKey: string = environment.privateKey;
  public readonly message: string = this.ts + this.privateKey + this.apiKey;
  public readonly hash: string = md5(this.message);

  public params(): HttpParams {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('ts', this.ts);
    httpParams = httpParams.append('apikey', this.apiKey);
    httpParams = httpParams.append('hash', this.hash);
    return httpParams
  }
}

