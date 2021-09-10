import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { CartsService } from '../carts.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn=false;
  private orderlist:AngularFireList<any>;
  private userlist:AngularFireList<any>;

  constructor( private firebase: AngularFireDatabase,public firebaseAuth:AngularFireAuth,private cartsService: CartsService,private firestore: AngularFirestore) { 
    this.orderlist=this.firebase.list('orders');
    this.userlist=this.firebase.list('users');

  }

  async signin(email:string,password:string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user))
      this.firebaseAuth.onAuthStateChanged(user=>{
      console.log(this.firebaseAuth.authState +" f")
     //   alert(this.firebaseAuth.authState)
      })
      alert("logged in " )
      window.location.href="/web/";
    })
    .catch(res=>{
      alert(res.message)
      })
  }
  userp:any
  temp:any
  next:any
  getUsers() {
    
   
    this.userlist=this.firebase.list('users');
    return this.userlist.snapshotChanges()
}
getOrders() {
    
   
  this.orderlist=this.firebase.list('orders');
  return this.orderlist.snapshotChanges()
}
  async signup(email:string,password:string,uname:string,mobile:string,addr:string)
  { 
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      
      localStorage.setItem('user',JSON.stringify(res.user))
      this.userp=[{
        username:uname,mobileno:mobile,emailadd:email,address:addr
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
