import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {

  eid=this.aroute.snapshot.params['eid'];
  employeeData:any={};
  constructor(public restApi:EmpserviceService,public route:Router,public aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.restApi.getEmployeeById(this.eid).subscribe((data)=>(this.employeeData=data));
  }

  updateEmployee()
  {
    if (window.confirm('Are you sure , you want to update this Employee Details?')) {
    this.restApi.updateEmployee(this.employeeData).subscribe((data:{})=>{
      this.route.navigate(['/employeelist']);
    })
  }
  }
  //validation

  @ViewChild('f')
  user = {
    firstname: '',
    lastname: '',
    department:'',
    number:'',
    email: '', 
  };
  submitted = false;

  onSubmit(f: NgForm) {
    this.submitted = true;
  }
}
