import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';
import { ResultserviceService } from '../resultservice.service';

@Component({
  selector: 'surveydisplay',
  templateUrl: './surveydisplay.component.html',
  styleUrls: ['./surveydisplay.component.css']
})
export class SurveydisplayComponent implements OnInit {
  eid=this.aroute.snapshot.params['eid'];
  resultData:any={};
  @Input()
  output={employeeId:'',surveyDate:'',employeeRating :'',phoneNumber:''};
  constructor(public restApi:EmpserviceService,public restApi1:ResultserviceService,public route:Router,public aroute:ActivatedRoute) { }

  ngOnInit(): void {
   this.restApi.getEmployeeById(this.eid).subscribe((data)=>(this.resultData=data));
  }

}
