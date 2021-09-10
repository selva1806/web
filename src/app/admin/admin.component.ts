import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _cartsService: CartsService,public firebaseSerivce: FirebaseService) { }
  orderarray:any;
displayarray:any=[];
ele:any;
  ngOnInit(): void {
    this.firebaseSerivce.getOrders().subscribe(list=>{
      this.orderarray=list.map(item=>{
        this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
         console.log(item.payload.val()[0].emailadd,user?.email)
    //   alert("1")
       
           this.displayarray.push({orid:item.payload.val()[0].orderid,uname:item.payload.val()[0].username,image:item.payload.val()[0].image,email:item.payload.val()[0].email,address:item.payload.val()[0].address,mobile:item.payload.val()[0].mobileno,price:item.payload.val()[0].price,itemname:item.payload.val()[0].name})
            console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
  

          })
      //  console.log(item.payload.val()[0].emailadd)
        
      
        })
        })
  
  }


  closeorder(evt:any,orderid:string)
  {
    evt.target.parentElement.remove();
    this.firebaseSerivce.getOrders().subscribe(list=>{
      this.orderarray=list.map(item=>{
        this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
         console.log(item.payload.val()[0].emailadd,user?.email)
    //   alert("1")
     if(orderid===item.payload.val()[0].orderid)    
     {     
         this._cartsService.removeOrders(String(item.key))
         window.location.href="/web#/admin"   
         //console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
          }

          })
      //  console.log(item.payload.val()[0].emailadd)
        
      
        })
        })
  
  }
}
