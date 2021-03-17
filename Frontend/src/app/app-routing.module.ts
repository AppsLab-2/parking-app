import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DetailPageComponent} from './detail-page/detail-page.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailPageComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
