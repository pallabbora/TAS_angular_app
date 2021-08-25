import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginCredentials } from '../LoginCredentials';
import { UserserviceService } from '../userservice.service';

declare var jQuery: any;

@Component({
  selector: 'loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

public logcredential:any = {emailId:'',password:'',designation:''};
msg='';

checking:any = {emailId:'',password:'',designation:''};
eid:any;

  constructor(public router:Router,public aroute:ActivatedRoute,public service:UserserviceService) { }

 

  validateUser(){
      this.service.validateUser(this.logcredential).subscribe(data=>(this.checking=data));
  
    if(this.checking.emailId == ""  &&  this.checking.password == "" ){
      this.router.navigate(['/login']);
     this.msg="Invalid Username or Password";
    }
   
   else if(this.checking.designation=="manager"){ this.router.navigate(['/employeelist']);}
    else if(this.checking.designation=="employee"){ this.router.navigate(['/employeeprofile',this.eid]);}
    
    console.log(this.checking);
    this.service.logIn(this.checking);
    console.log(this.eid);
  }
  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        console.log("Hello from jQuery!");
      });
    })(jQuery);
  }



}
