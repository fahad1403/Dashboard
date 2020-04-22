import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dash } from './dash.model';
import { from } from 'rxjs';
import { FORMERR } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class SharedComponent {
  list: dash[];
  readonly rootURL = "https://localhost:44311/api/"

  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL+'reg_users').toPromise().then(res => this.list = res as dash[]);
  }
}

