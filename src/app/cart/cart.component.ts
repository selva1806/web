import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems:any=[];
  constructor(private _cartsService: CartsService,public firebaseSerivce: FirebaseService) { }

  ngOnInit(): void {
    this.cartitems = this._cartsService.getcartitems();
  }
closecart(evt:any){

  var v=evt.target;

  v.parentElement.style.transform="translateX(100%)";

  
}

closeitem(evt:any)
{
  var image=evt.target.parentElement.childNodes[1].src;
  var cost=evt.target.parentElement.childNodes[3].innerHTML.slice(1);
  var ele={imag:image,price:cost}

  console.log(ele)
  this.cartitems = this._cartsService.removecartitems(ele);
//  evt.target.parentElement.remove();
this.cartitems = this._cartsService.getcartitems();

}


orderform:any;
 orderarray:any;
randid:any;
 addtodb(itemname:string,itemcost:string,itemurl:string,quantity:string)
 { 
   this.randid=  Math.floor(Math.random() * (10000000000 - 1000000000)) + 1000000000;

  this.firebaseSerivce.getUsers().subscribe(list=>{
    this.orderarray=list.map(item=>{
      this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
     //   console.log(item.payload.val()[0].emailadd,user?.email)
        if(item.payload.val()[0].emailadd===user?.email)
        {
     console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
     this.orderform=[{orderid:this.randid,name:itemname,price:itemcost,image:itemurl,username:item.payload.val()[0].username,address:item.payload.val()[0].address,mobileno:item.payload.val()[0].mobileno,email:item.payload.val()[0].emailadd,quantity:quantity}];
     this._cartsService.addOrdersToFirebase(this.orderform);   

    }
          
        })
    //  console.log(item.payload.val()[0].emailadd)
      
    
      })
      })
  document.getElementById("clo")?.click()
 }
 




}
