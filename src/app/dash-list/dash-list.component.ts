import { Component, OnInit } from '@angular/core';
import { SharedComponent } from './../shared/dash.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.css']
})
export class DashListComponent implements OnInit {

  constructor(private service: SharedComponent) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
