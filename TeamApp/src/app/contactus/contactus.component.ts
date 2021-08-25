import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  contact()
  {
    if (window.confirm('Your message posted Successfully!!')) {
        this.route.navigate(['/home']);
      }
    }
}
