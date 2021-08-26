import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveypageComponent } from './surveypage/surveypage.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomeComponent } from './home/home.component';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { EmployeecreateComponent } from './employeecreate/employeecreate.component';
import { EmpserviceService } from './empservice.service';
import { ResultserviceService } from './resultservice.service';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { SurveydisplayComponent } from './surveydisplay/surveydisplay.component';
import { UserserviceService } from './userservice.service';



@NgModule({
  declarations: [
    AppComponent,
    SurveypageComponent,
    ContactusComponent,
    AboutusComponent,
    EmployeelistComponent,
    LoginpageComponent,
    HomeComponent,
    EmployeeeditComponent,
    EmployeecreateComponent,
    EmployeeprofileComponent,
    SurveydisplayComponent
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpserviceService,ResultserviceService,UserserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
