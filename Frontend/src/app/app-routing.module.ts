import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { BookFormularComponent } from './book-formular/book-formular.component';
import { UnbookingFormularComponent } from './unbooking-formular/unbooking-formular.component';
import { LoginFormularComponent } from './login-formular/login-formular.component';
import { AuthGuard } from './auth.guard/auth.guard';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { ParkingLotFormComponent } from './parking-lot-form/parking-lot-form.component';
import { RegisterFormComponent } from './register-form/register-form.component'

const routes: Routes = [
  { path: 'parking-lot', component: ParkingLotComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: '', redirectTo: 'parking-lot', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: 'book-form/:id', component: BookFormularComponent },
  { path: 'unbook-form/:id', component: UnbookingFormularComponent },
  { path: 'login-form', component:LoginFormularComponent },
  { path: 'book', component: BookFormularComponent, canActivate: [AuthGuard] },
  { path: 'lot-form', component: ParkingLotFormComponent },
  { path: 'register', component: RegisterFormComponent }
  
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
