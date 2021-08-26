
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmpserviceService } from '../empservice.service';
import { ResultserviceService } from '../resultservice.service';

@Component({
  selector: 'surveypage',
  templateUrl: './surveypage.component.html',
  styleUrls: ['./surveypage.component.css']
})
export class SurveypageComponent implements OnInit {

  eid=this.aroute.snapshot.params['eid'];

  dataForSurvey:any={};

  @Input()
  resultDetails={managerId:'', result_id:'',employeeId:this.eid,surveyDate:'',employeeRating :'',question10 : '',question9: '',question8 : '',question7: '',question6 : '',question5 : '',question4 : '',question3 : '',question2 : '',question1 : ''};
  constructor(public restApi:EmpserviceService,public restApi1:ResultserviceService,public route:Router,public aroute:ActivatedRoute) { }

  //abc={managerId:'', result_id:'',employeeId:'',surveyDate:'',employeeRating :'',question10 : '',question9: '',question8 : '',question7: '',question6 : '',question5 : '',question4 : '',question3 : '',question2 : '',question1 : ''};
  ngOnInit(): void {
    this.restApi.getEmployeeById(this.eid).subscribe((data)=>(this.dataForSurvey=data));
   
    
  }
  addResult()
  { 
    if (window.confirm('Thank you for your Feedback. You will be redirected to HomePage')) {
      this.dataForSurvey.surveyStatus='Done';
  
     console.log(this.dataForSurvey.surveyStatus);
    
    this.resultDetails.employeeRating=this.resultDetails.question1+this.resultDetails.question2+this.resultDetails.question3+this.resultDetails.question4+this.resultDetails.question5+this.resultDetails.question6+this.resultDetails.question7+this.resultDetails.question8+this.resultDetails.question9+this.resultDetails.question10;
   this.dataForSurvey.employeeRating=this.resultDetails.employeeRating;
   
    this.restApi1.createResult(this.resultDetails).subscribe((data:{})=>{
      console.log(this.resultDetails.employeeId);
     // this.route.navigate(['/employeelist']);

    })
    console.log(this.resultDetails.result_id);
    if(this.dataForSurvey.surveyStatus=='Done')
    {
      this.updateEmployee();
    }
  
  }
  }


  updateEmployee()
  {
    
    this.restApi.updateEmployee(this.dataForSurvey).subscribe((data:{})=>{
      this.route.navigate(['/employeelist']);
    })
  }
  //validation
  
  @ViewChild('f')
  user = {
    question1: '',
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
