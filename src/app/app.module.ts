import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { HlightDirective } from './directive/hlight.directive';
import { ArrangeorderPipe } from './pipes/arrangeorder.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DisplayComponent } from './display/display.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { EmployService } from './employ.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipesComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    HlightDirective,
    ArrangeorderPipe,
    SortPipe,
    FilterPipe,
    CreateEmployeeComponent,
    EmployeeListComponent,
    DisplayComponent,
    UpdateEmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ],
  providers: [AuthGuardService, EmployService],
  bootstrap: [AppComponent]
})
export class AppModule { }
