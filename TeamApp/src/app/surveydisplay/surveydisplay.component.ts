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
    this.restApi.getEmployeeById(this.eid).subscribe((data)=>(this.resultData=data))

  }

setResult(){
  if(this.resultData.employeeRating>85 && this.resultData.surveyStatus=='Done')
  {
    this.resultData.feedback='Eligible For Promotion';
    return  this.resultData.feedback;
  }
  else if(this.resultData.employeeRating>60 && this.resultData.employeeRating<85 && this.resultData.surveyStatus=='Done'){
    this.resultData.feedback='Eligible For Salary Increment';
    return  this.resultData.feedback;

  }
  else if(this.resultData.employeeRating<60 && this.resultData.surveyStatus=='Done'){
    this.resultData.feedback='Training Required';
    return  this.resultData.feedback;

  }
  else{
    this.resultData.feedback='No Survey Taken';
    return  this.resultData.feedback;

  }
}

setDP()
{
  if(this.resultData.gender=='female')
  {
    this.resultData.photo=''
    return this.resultData.photo;
  }
  else
  {
    this.resultData.photo="https://bootdey.com/img/Content/avatar/avatar7.png";
    return this.resultData.photo;
  }
}
}
