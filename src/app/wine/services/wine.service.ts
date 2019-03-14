import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Wine } from '../model/wine.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WineSearchResult } from '../model/wineSearchResult.model';

const baseUrl = 'http://localhost:3000/api/wines';

@Injectable({
	providedIn: 'root'
})
export class WineService {

	constructor(private http: HttpClient) { }

	getAll(params?: any): Observable<WineSearchResult>{
    let queryParams = {};
    if(params){
      queryParams = {params : new HttpParams()
        .set('sort', params.sort || '')
        .set('sortDirection', params.sortDirection || '')
        .set('page', params.page && params.page.toString() || '')
        .set('pageSize', params.pageSize && params.pageSize.toString() || '')
        .set('filter', params.filter && JSON.stringify(params.filter) || '')
      };
    }

    return this.http.get(baseUrl, queryParams).pipe(map(
      data => new WineSearchResult(data)
    ));
  }

  get(id :number): Observable<Wine>{
    return this.http.get(baseUrl + '/' + id).pipe(map(
      data => new Wine(data)
    ));
  }

  add(newWine :Wine): Observable<Wine>{
    return this.http.post(baseUrl, newWine).pipe(map(
      data => new Wine(data)
    ));
  }

  update(editedWine: Wine): Observable<Wine>{
    return this.http.put(baseUrl + '/' + editedWine._id, editedWine).pipe(map(
      data => new Wine(data)
    ));
  }

  remove(id: number): Observable<Wine>{
    return this.http.delete(baseUrl + '/' + id).pipe(map(
      data => new Wine(data)
    ));
  }
}
