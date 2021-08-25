import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';
import { ResultserviceService } from '../resultservice.service';

@Component({
  selector: 'employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {
  eid=this.aroute.snapshot.params['eid'];
  myData:any={};
  constructor(public restApi:EmpserviceService,public restApi1:ResultserviceService,public route:Router,public aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.restApi.getEmployeeById(this.eid).subscribe((data)=>(this.myData=data));
  }

}
