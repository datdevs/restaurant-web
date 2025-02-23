import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LocaleType } from '../types';

const API_ENDPOINT = 'https://api.test.soa-dev.net/api/v1';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  getPages(locale: LocaleType): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/pages?lang=${locale}`).pipe(map((data: any) => data[0]));
  }
}
