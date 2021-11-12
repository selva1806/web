import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  cartitems:any=[];
  orderarray1:any;

name:String | undefined
email:String | undefined
mobile:String | undefined
add:String | undefined

  constructor(private _cartsService: CartsService,public firebaseSerivce: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseSerivce.getUsers().subscribe(list=>{
      this.orderarray=list.map(item=>{
        this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
      //   console.log(item.payload.val()[0].emailadd,user?.email)
      // alert("1")
          if(item.payload.val()[0].emailadd===user?.email)
          {

            let mc = document.getElementById("name1") as HTMLInputElement;
            this.name= ""+item.payload.val()[0].username;
            mc = document.getElementById("emailid1") as HTMLInputElement;
            this.email = ""+item.payload.val()[0].emailadd;
            mc = document.getElementById("phone1") as HTMLInputElement;
            this.mobile = ""+item.payload.val()[0].mobileno;
            mc = document.getElementById("address1") as HTMLInputElement;
            this.add = ""+item.payload.val()[0].address;
  
          //  this.cartitems = this._cartsService.getcartitems(String(this.email));

  
            //console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
  
      }
            
          })
      //  console.log(item.payload.val()[0].emailadd)
        
      
        })
        })
    
  this.firebaseSerivce.getOrders().subscribe(list=>{

    this.orderarray1=list.map(item=>{

      this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
     //  console.log(item.payload.val()[0].emailadd,user?.email)
if(user?.email ===item.payload.val()[0].email  )
    
{ 
 // console.log(item.payload.val()[0].email,"  space  ",user?.email)
 // alert("1")

         this.displayarray.push({orid:item.payload.val()[0].orderid,uname:item.payload.val()[0].username,image:item.payload.val()[0].image,email:item.payload.val()[0].email,address:item.payload.val()[0].address,mobile:item.payload.val()[0].mobileno,price:item.payload.val()[0].price,itemname:item.payload.val()[0].name,quantity:item.payload.val()[0].quantity})
         this.count+=1; 
         console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)

      }
        })
    //  console.log(item.payload.val()[0].emailadd)
      
    
      })
      })

  }
closecart(evt:any){

  var v=evt.target;

  v.parentElement.style.transform="translateY(100%)";

  
}
fullclose(evt:any){
  var v=evt.target.parentElement.parentElement.parentElement.style.display="none";
}




nme:String | undefined;
displayarray:any=[];
count=0;
orderform:any;
 orderarray:any;
randid:any;
 
 

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
            this.name= ""+item.payload.val()[0].username;
            mc = document.getElementById("emailid1") as HTMLInputElement;
            this.email = ""+item.payload.val()[0].emailadd;
            mc = document.getElementById("phone1") as HTMLInputElement;
            this.mobile = ""+item.payload.val()[0].mobileno;
            mc = document.getElementById("address1") as HTMLInputElement;
            this.add = ""+item.payload.val()[0].address;
  
  
  
            console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
  
      }
            
          })
      //  console.log(item.payload.val()[0].emailadd)
        
      
        })
        })
  
  

}

closeview(evt:any)
{
  var v= evt.target;
  v.parentElement.parentElement.parentElement.style.display="none";
}

closeorder(evt:any,orderid:string)
{
  this.firebaseSerivce.getOrders().subscribe(list=>{
    this.orderarray=list.map(item=>{
      this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
       console.log(item.payload.val()[0].emailadd,user?.email)
  //   alert("1") 
   if(orderid===item.payload.val()[0].orderid)    
   {     
       this._cartsService.removeOrders(String(item.key))
       this.count-=1;
     location.reload()
       //console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
        }

        })
    //  console.log(item.payload.val()[0].emailadd)
      
    
      })
      })

}

}



