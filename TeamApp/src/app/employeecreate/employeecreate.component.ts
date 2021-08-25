import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {
  Managers:any=[];
  @Input()
  employeeDetails={managerId:'{{managerId}}',phoneNumber:'',gender:'',firstName:'',lastName:'',department:'',hireDate:'',email:'',surveyStatus:'Pending'};


  constructor(public restApi:EmpserviceService,public route:Router) { }

  ngOnInit(): void {
    this.getAllManagers();
  }

  addEmployee()
  {  if (window.confirm('Are you sure , you want to add this Employee to the Database?')) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data:{})=>{
      this.route.navigate(['/employeelist']);
    })
  }
  }

  getAllManagers()
  {
   return  this.restApi.getManagers().subscribe((data)=>this.Managers=data);
   
    
  }
  //validation
  // @ViewChild('f')
 

  // user = {
  //   firstname: '',
  //   lastname: '',
  //   department:'',
  //   number:'',
  //   email: '',
    
  // };
  submitted = false;

  onSubmit(f: NgForm) {
    this.submitted = true;
  }
}
