import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component';
import { DisplayComponent } from './display/display.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = 
[{ path: 'home', component: HomeComponent},
{ path: 'pipes', component: PipesComponent},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'employee-list', component: EmployeeListComponent},
{path: 'employee-details', component: EmployeeDetailsComponent},
{path: 'pipes', component: PipesComponent},
{path: 'update-employee/:id', component: UpdateEmployeeComponent},
{path: 'employee-details/:id', component: EmployeeDetailsComponent},
{path: 'display', component: DisplayComponent,

   children : [
   {path: 'create-employee', component: CreateEmployeeComponent},
   {path: 'employee-details/:id', component: EmployeeDetailsComponent},
   {path: 'update-employee/:id', component: UpdateEmployeeComponent},
   {path: 'employs', component:EmployeeListComponent}
    ]}
  ]

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
