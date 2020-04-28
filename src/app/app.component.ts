import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { DashService } from './shared/dash.service';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  // id:Array<{}>=[];
  
  constructor(public service: DashService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.service.reg_orglist();
    this.service.training();
    // console.log(this.service.list);
    // this.service.list.push({id:this.id});
    // console.log(this.id);
  }

  Highcharts = Highcharts;
  linechart = {
    series: [
      {
        data: [1,2,3]
      
      }
    ],
    chart: {
      type: "line"
    },
    title: {
      text: "Active Users"
    }
  };
  barchart = {
    series: [
      {
        data: [1, 2, 3]
      }
    ],
    chart: {
      type: "bar"
    },
    title: {
      text: "Trending Trainings"
    }    
  };
}