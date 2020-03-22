import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardCompComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
