import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignedIn=false;
  constructor(public firebaseSerivce: FirebaseService){}

  ngOnInit(): void {
  }
  async onSignup(email:string,password:string)
  {
    await this.firebaseSerivce.signup(email,password)
    if(this.firebaseSerivce.isLoggedIn)
    {
    this.isSignedIn=true;
  alert("signup successfull")
  }
  }

}
