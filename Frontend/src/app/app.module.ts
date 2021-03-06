import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { MessagesComponent } from './messages/messages.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BookFormularComponent } from './book-formular/book-formular.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { UnbookingFormularComponent } from './unbooking-formular/unbooking-formular.component';
import { FilterComponent } from './filter/filter.component';
import { MatSliderModule } from  '@angular/material/slider';
import { LoginFormularComponent } from './login-formular/login-formular.component';
import { ParkingLotFormComponent } from './parking-lot-form/parking-lot-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParkingLot } from './models/patking-lot';
import { ParkingLotService } from './services/parking-lot.service';
import { PlaceService } from './services/place.service';
import { AuthInterceptor } from './auth.interceptor/auth.interceptor';
import { UserService } from './services/user.service';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailPageComponent,
    MessagesComponent,
    BookFormularComponent,
    ParkingLotComponent,
    UnbookingFormularComponent,
    FilterComponent,
    LoginFormularComponent,
    ParkingLotFormComponent,
    RegisterFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatSliderModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
