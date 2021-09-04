import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn=false;
  constructor(public firebaseAuth:AngularFireAuth) { }

  async signin(email:string,password:string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user))
      alert("logged in")
      window.location.href="/web/";
    })
    .catch(res=>{
      alert(res.message)
      })
  }
  
  async signup(email:string,password:string)
  {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      
      localStorage.setItem('user',JSON.stringify(res.user))
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
