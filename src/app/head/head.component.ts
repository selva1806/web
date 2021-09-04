import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  

  
  isSignedIn=false;
  constructor(public firebaseService: FirebaseService){}
    ngOnInit(){
  if(localStorage.getItem('user')!==null)
  {
    this.isSignedIn=true;
  }
  else{
    this.isSignedIn=false;
  }
    }
  
   
opencart(){
    var v=document.getElementById("cart");
    v?.setAttribute("style","transform:translateX(0%);");
}
logout()
  {
    this.firebaseService.logout()
    this.isLogout.emit()
    console.log("logged out")
  }
}
