import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignedIn=false;
  
  constructor(public firebaseSerivce: FirebaseService){
    
  }
  orderarray:any;
  ngOnInit(): void {
  }
  async onSignup(email:string,password:string,uname:string,mobile:string,addr:string)
  {
    await this.firebaseSerivce.signup(email,password,uname,mobile,addr)
    if(this.firebaseSerivce.isLoggedIn)
    {
    this.isSignedIn=true;
 // alert("signup successfull")
  }
  }
  tempor:any
   

}
