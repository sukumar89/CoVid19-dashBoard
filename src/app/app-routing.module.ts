import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  { path: 'home', component: AppComponent , pathMatch:'full' },
  { path: 'dashboard', component: DashboardCompComponent },
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: '/dashboard' ,pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
