import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  
})

export class EmployeelistComponent implements OnInit {
  Employees:any=[];
  searchById:any;
  constructor(public router:Router,public aroute:ActivatedRoute,private restApi:EmpserviceService) { }
  
  ngOnInit(): void {
   this.loadEmployees();
    
  }
  loadEmployees()
  {
     return this.restApi.getEmployees().subscribe((data)=>this.Employees=data);
  }

  deleteEmployee(id: any)
  {  if (window.confirm('Are you sure , you want to Delete this employee permanently?')) {
      this.restApi.deleteEmployee(id).subscribe((data)=>this.loadEmployees());
  }
  }

   employeeData:any=[];
   loadAEmployee()
   {
      return this.restApi.getEmployeeById(this.searchById).subscribe((data)=>this.employeeData=data);
   }

  getEmployeeById(searchById:any)
  {
    return this.restApi.getEmployeeById(searchById).subscribe((data)=>(this.loadAEmployee()));
  }
}
