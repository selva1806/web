import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _cartsService: CartsService,public router:Router) { }

  ngOnInit(): void {
  }
  contact:any;
  contactform(user:string,email:string,mobile:string,subject:string,message:string){
  this.contact=[{user:user,email:email,mobile:mobile,subject:subject,message:message}]
  this._cartsService.contactAdd(this.contact)
  this.router.navigate(['/'])
  }

}
