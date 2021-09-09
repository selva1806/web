import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartsService } from '../carts.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  

  
  isSignedIn=false;
  constructor(private _cartsService: CartsService,public firebaseSerivce: FirebaseService) { }
    ngOnInit(){
  if(localStorage.getItem('user')!==null)
  {
    this.isSignedIn=true;
  }
  else{
    this.isSignedIn=false;
  }
    }
    orderarray:any;

    viewdetails()
    { 
      this.firebaseSerivce.getUsers().subscribe(list=>{
        this.orderarray=list.map(item=>{
          this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
           console.log(item.payload.val()[0].emailadd,user?.email)
      //   alert("1")
            if(item.payload.val()[0].emailadd===user?.email)
            {
              var v=document.getElementById("name");
              v?.setAttribute("value",item.payload.val()[0].username);
              v=document.getElementById("emailid");
              v?.setAttribute("value",item.payload.val()[0].emailadd);
              v=document.getElementById("phone");
              v?.setAttribute("value",item.payload.val()[0].mobileno);
              v=document.getElementById("address");
              v?.setAttribute("value",item.payload.val()[0].address);
    
    
              console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
    
        }
              
            })
        //  console.log(item.payload.val()[0].emailadd)
          
        
          })
          })
    
    }
    
    openpro(){
      
      var c= document.getElementById("pro");
     c?.setAttribute("style","display:grid;");
      this.viewdetails();
     }
opencart(){
    var v=document.getElementById("cart");
    v?.setAttribute("style","transform:translateX(0%);");
}
logout()
  {
    this.firebaseSerivce.logout()
    this.isLogout.emit()
    console.log("logged out")
  }
 
}
