import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { CartsService } from '../carts.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn=false;
  constructor(public firebaseAuth:AngularFireAuth,private cartsService: CartsService) { }

  async signin(email:string,password:string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user))
      this.firebaseAuth.onAuthStateChanged(user=>{
      console.log(this.firebaseAuth.authState +" f")
        alert(this.firebaseAuth.authState)
      })
      alert("logged in " )
      window.location.href="/web/";
    })
    .catch(res=>{
      alert(res.message)
      })
  }
  userp:any
  async signup(email:string,password:string,uname:string,mobile:string)
  { 
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      
      localStorage.setItem('user',JSON.stringify(res.user))
      this.userp=[{
        username:uname,mobileno:mobile,emailadd:email
      }]
      this.cartsService.addUsersTOFirebase(this.userp);
      alert("signed up")
      window.location.href="/web/";

    })
    .catch(res=>{
    alert(res.message)
    })
  }
  logout()
  {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
    alert("logged out")
  }
}
