import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  Employees:any=[];
 // searchById:any;
  searchById=this.aroute.snapshot.params['eid'];
  
  constructor(public router:Router,public aroute:ActivatedRoute,private restApi:EmpserviceService) { }

  ngOnInit(): void {
      this.loadAEmployee();
    //this.restApi.getEmployeeById(this.searchById).subscribe((data)=>this.Employees=data);
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
        //console.log(this.Employees)
   }

  // getEmployeeById(searchById:any)
  // {
  //   return this.restApi.getEmployeeById(searchById).subscribe((data)=>(this.loadAEmployee()));
  // }
}
