import { Component } from "@angular/core";
import * as Highcharts from "highcharts";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Highcharts = Highcharts;
  linechart = {
    series: [
      {
        data: [1, 2, 3]
      }
    ],
    chart: {
      type: "line"
    },
    title: {
      text: "linechart"
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
      text: "barchart"
    }    
  };
}