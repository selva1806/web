import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _cartsService: CartsService,public firebaseSerivce: FirebaseService) { }

  ngOnInit(): void {
  }
closepro(evt:any){
  
  var v=evt.target;

  v.parentElement.style.display="none";

}
orderarray:any;
userarray:any;
profileupdation(email:string,uname:string,mobile:string,addr:string)
{ 
  this.firebaseSerivce.getUsers().subscribe(list=>{
    this.orderarray=list.map(item=>{
      this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
     //   console.log(item.payload.val()[0].emailadd,user?.email)
        if(item.payload.val()[0].emailadd===user?.email)
        {
        
          var s=String(item.key)
         this._cartsService.updateUsers(s,email,uname,mobile,addr)
          // item.payload.val()[0].remove('mobileno');
         

      //    console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
          alert("profile updated")
          window.location.href="/web/"
    }
          
        })
    //  console.log(item.payload.val()[0].emailadd)
      
    
      })
      })

}
}
