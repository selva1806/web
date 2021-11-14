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
  randid=0;
  contact:any;
  contactform(user:string,email:string,mobile:string,subject:string,message:string){
    if(user.length === 0 || email.length === 0 ||mobile.length === 0 ||subject.length === 0 ||message.length === 0  )
  {
    alert("please fill all the fields")
  }
  else{
    if(mobile.length !== 10){
     alert("Invalid mobile number")
    }
   else 
   {
     if(!email.includes('@') || !email.includes('.')){
     alert("Invalid email")
     }
  
  else{
    this.randid= 0;
    this.randid=  Math.floor(Math.random() * (10000000000 - 1000000000)) + 1000000000;
 
    this.contact=[{qid:this.randid,user:user,email:email,mobile:mobile,subject:subject,message:message}]
  this._cartsService.contactAdd(this.contact)
  this.router.navigate(['/'])
  }
}
}
}
}
