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
  async onSignup(email:string,password:string,password2:string,uname:string,mobile:string,addr:string)
  {
    if(email.length === 0 || password.length === 0 || password2.length === 0 || uname.length === 0 || mobile.length === 0 || addr.length === 0 )
    {
      alert("Please satisfy all the fields")
      if(uname.length === 0)
      {
        var v = document.getElementById('ur');
        v?.style.setProperty("border-bottom-color","red");
      }
      else
      {
        var v = document.getElementById('ur');
        v?.style.setProperty("border-bottom-color","#08ff08");
      }
      if(email.length === 0)
      {
        var v = document.getElementById('em');
        v?.style.setProperty("border-bottom-color","red");
      }
      else
      {
        var v = document.getElementById('em');
        v?.style.setProperty("border-bottom-color","#08ff08");
      }
      if(password.length === 0)
      {
        var v = document.getElementById('pass1');
        v?.style.setProperty("border-bottom-color","red");
      }
      else
      {
        var v = document.getElementById('pass1');
        v?.style.setProperty("border-bottom-color","#08ff08");
      }
      if(password2.length === 0)
      {
        var v = document.getElementById('pass2');
        v?.style.setProperty("border-bottom-color","red");
      }
      else
      {
        var v = document.getElementById('pass2');
        v?.style.setProperty("border-bottom-color","#08ff08");
      }
      if(mobile.length === 0)
      {
        var v = document.getElementById('ph');
        v?.style.setProperty("border-bottom-color","red");
      }
      else
      {
        var v = document.getElementById('ph');
        v?.style.setProperty("border-bottom-color","#08ff08");
      }
      if(addr.length === 0)
      {
        var v = document.getElementById('ad');
        v?.style.setProperty("border-bottom-color","red");
      }
      else
      {
        var v = document.getElementById('ad');
        v?.style.setProperty("border-bottom-color","#08ff08");
      }
    }
    else{
      var v = document.getElementById('ur');
        v?.style.setProperty("border-bottom-color","#08ff08");
        
        var v = document.getElementById('ad');
        v?.style.setProperty("border-bottom-color","#08ff08");
        
        var v = document.getElementById('em');
        v?.style.setProperty("border-bottom-color","#08ff08");

        
        var v = document.getElementById('ph');
        v?.style.setProperty("border-bottom-color","#08ff08");
        var v = document.getElementById('pass2');
        v?.style.setProperty("border-bottom-color","#08ff08");
        var v = document.getElementById('pass1');
        v?.style.setProperty("border-bottom-color","#08ff08");

      if(password !== password2 || password.length < 8){
        alert("password error/mismatch\n1.makesure password contains atleast 1 caps & 1 number to make them stronger(optional)\n2.length must be greater than 8\n")
        var v = document.getElementById('pass1');
        v?.style.setProperty("border-bottom-color","red");
        var v = document.getElementById('pass2');
        v?.style.setProperty("border-bottom-color","red");
      }
      else{
       if(mobile.length !== 10)
       {
          alert("invalid mobile number")
          var v = document.getElementById('pass1');
          v?.style.setProperty("border-bottom-color","#08ff08");
          var v = document.getElementById('pass2');
          v?.style.setProperty("border-bottom-color","#08ff08");
          var v = document.getElementById('ph');
          v?.style.setProperty("border-bottom-color","red");
       }
    else
    {
      
      var v = document.getElementById('ph');
      v?.style.setProperty("border-bottom-color","#08ff08");
    await this.firebaseSerivce.signup(email,password,uname,mobile,addr)
    if(this.firebaseSerivce.isLoggedIn)
    {
    this.isSignedIn=true;
 // alert("signup successfull")
  }
  }
}
}

}
  tempor:any
   

}
