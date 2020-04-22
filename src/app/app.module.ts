import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashListComponent } from './dash-list/dash-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HighchartsChartModule ],
  declarations: [ AppComponent, DashListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }