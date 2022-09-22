import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  private url = environment.url;

  private securityHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  public getData( endPoint: string ){
    const url = `${this.url}/${endPoint}`;
    return this.httpClient.get(url, {headers: this.securityHeaders});
  }

}
