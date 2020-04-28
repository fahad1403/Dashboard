import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dash } from './dash.model';
import { RegOrg } from './reg-org.model';
import { Training } from './training.model';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  refreshData: 'new';
  list: Dash[];
  org_list:RegOrg[];
  training_list:Training[];

  readonly rootURL = "https://localhost:44311/api/"

  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL+'reg_user').toPromise().then(res => this.list = res as Dash[]);
  }

  reg_orglist(){
    this.http.get(this.rootURL+'reg_org').toPromise().then(res => this.org_list = res as RegOrg[]);
  }

  training(){
    this.http.get(this.rootURL+'trainings').toPromise().then(res => this.training_list = res as Training[]);
  }
  
}
