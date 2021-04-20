import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { BookFormularComponent } from './book-formular/book-formular.component';
import { UnbookingFormularComponent } from './unbooking-formular/unbooking-formular.component'

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: 'book-form/:id', component: BookFormularComponent },
  { path: 'unbook-form/:id', component: UnbookingFormularComponent }
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
