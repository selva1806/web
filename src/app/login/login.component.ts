import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn=false;
  constructor(public firebaseSerivce: FirebaseService){}
    ngOnInit(){
  if(localStorage.getItem('user')!==null)
  {
    this.isSignedIn=true;
    
  }
  else{
    this.isSignedIn=false;
  }
    }
  
  async resetPass(email:string)
  {
    this.firebaseSerivce.firebaseAuth.sendPasswordResetEmail(email);
    alert("reset link sent to "+email+" successfully")
  }
  
    async onSignin(email:string,password:string)
    {    

      await this.firebaseSerivce.signin(email,password)
      if(this.firebaseSerivce.isLoggedIn)
      {
      this.isSignedIn=true;
    console.log("logged in")
    }
    }
    handleLogout()
    {
      this.isSignedIn=false;
   
    }
  

}
