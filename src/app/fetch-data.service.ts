import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { fetchedDataType } from './posts';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http:HttpClient) { }

  getData():Observable<fetchedDataType[]>{
    return this.http.get<fetchedDataType[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
