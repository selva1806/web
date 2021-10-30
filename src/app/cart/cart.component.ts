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
fullclose(evt:any){
  var v=evt.target.parentElement.parentElement.parentElement.style.display="none";
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


nme:String | undefined;

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
      document.getElementById("fcl")?.click()
  document.getElementById("clo")?.click()
 }
 

 show(evt:any,na:String){
  var v=evt.target;
  this.nme=na;
  v.parentElement.parentElement.parentElement.childNodes[0].style.display="block";
  
    this.firebaseSerivce.getUsers().subscribe(list=>{
      this.orderarray=list.map(item=>{
        this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
         console.log(item.payload.val()[0].emailadd,user?.email)
      // alert("1")
          if(item.payload.val()[0].emailadd===user?.email)
          {

            let mc = document.getElementById("name1") as HTMLInputElement;
            
            mc.innerHTML = "Name : "+item.payload.val()[0].username;
            mc = document.getElementById("emailid1") as HTMLInputElement;
            mc.innerHTML = "Email : "+item.payload.val()[0].emailadd;
            mc = document.getElementById("phone1") as HTMLInputElement;
            mc.innerHTML = "Mobile : "+item.payload.val()[0].mobileno;
            mc = document.getElementById("address1") as HTMLInputElement;
            mc.innerHTML = "Address : "+item.payload.val()[0].address;
  
  
            console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
  
      }
            
          })
      //  console.log(item.payload.val()[0].emailadd)
        
      
        })
        })
  
  

}


}
