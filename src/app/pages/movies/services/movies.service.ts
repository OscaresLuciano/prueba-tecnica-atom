import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieInterface } from '../models';
import { environment } from '../../../../environments/environment.local';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class moviesService {

  private readonly API_KEY = `8177faa9`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies(searchValue: string): Observable<MovieInterface[]> {
    return this.httpClient.get<MovieInterface[]>(
      `${environment.baseUrl}/?apikey=${this.API_KEY}&s=${searchValue}}`
    ).pipe(
      map((response: any) => response.Search || [])
    )
  }
}
