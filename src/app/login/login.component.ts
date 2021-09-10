import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn=false;
  constructor(public firebaseSerivce: FirebaseService,public router: Router){}
    ngOnInit(){
  if(localStorage.getItem('user')!==null)
  {
    this.isSignedIn=true;
    
  }
  else{
    this.isSignedIn=false;
  }
  this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
    if(user?.email)
    { 
     
      if(user?.email==="ss@gmail.com")
      {
        this.router.navigate(['/admin']);

      }
      else
      {
     this.router.navigate(['/products']);
    }   
    }
    
  })
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
