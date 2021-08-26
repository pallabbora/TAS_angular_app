import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SurveypageComponent } from './surveypage/surveypage.component';;
import { EmployeecreateComponent } from './employeecreate/employeecreate.component';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { SurveydisplayComponent } from './surveydisplay/surveydisplay.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';

const routes: Routes = [
  {path:'surveypage/:eid',component:SurveypageComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'employeelist',component:EmployeelistComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'home',component:HomeComponent},
  {path:'employeecreate',component:EmployeecreateComponent},
  {path:'employeeedit/:eid',component:EmployeeeditComponent},
  {path:'surveydisplay/:eid',component:SurveydisplayComponent},
  {path:'employeeprofile/:eid',component:EmployeeprofileComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
