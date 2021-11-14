import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
private orderList:AngularFireList<any>;
private userList:AngularFireList<any>;
private updateList:AngularFireList<any>;
private contactList:AngularFireList<any>;
private cartList:AngularFireList<any>;
orderarray1:any
displayarray:any
count=0
  constructor(  private firebase: AngularFireDatabase,public firebaseAuth:AngularFireAuth) {
  this.orderList=this.firebase.list('orders');
  this.userList=this.firebase.list('users');
  this.updateList=this.firebase.list('users');
  this.contactList=this.firebase.list('contacts');
  this.cartList=this.firebase.list('cart');
   }
public cartitems:any=[];

 addcartitems(item:any){
  var a=0;
  for(var i=0;i<this.cartitems.length;i++)
  {
    if(item.imag.endsWith(this.cartitems[i].imag ) )
    {
     alert("item already added to cart")
     a=1;
     // console.log(this.cartitems[i].imag)
    }
   
  }
  if(a===0)
  {this.cartitems.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cartitems));
 // console.log(this.cartitems)
  //console.log(localStorage.getItem('cart'))
  this.cartList.push(item);

  alert("Item added to cart")
  location.reload();


  } 
}
  getcartitems(mail:string)
  {
    var caritems: { imag: any; price: any; name: any; quantity: any; uname: any; email: any; }[]=[];
    this.cartList.snapshotChanges().subscribe(list=>{

      this.orderarray1=list.map(item=>{
  
        this.firebaseAuth.onAuthStateChanged(user=>{
       //  console.log(item.payload.val().email)
  if(mail ===item.payload.val().email  )
      
  { 
   // console.log(item.payload.val()[0].email,"  space  ",user?.email)
   // alert("1")
   var cartor={imag:item.payload.val().imag,price:item.payload.val().price,name:item.payload.val().name,quantity:item.payload.val().quantity,uname:item.payload.val().uname,email:item.payload.val().email};

    
        caritems.push(cartor)
      }
          })
      //  console.log(item.payload.val()[0].emailadd)
      //  console.log(caritems)
      
        })
        })
    //console.log(" email " +mail)
    return caritems;
  }
  removecartitems(itemc:any,mail:String){
   // const id = this.cartitems.array.indexOf(item);
   var index;
   this.cartList.snapshotChanges().subscribe(list=>{
     

      this.orderarray1=list.map(item=>{
        this.firebaseAuth.onAuthStateChanged(user=>{
          
        console.log(item.payload.val().email," next ",item.payload.val().imag)
        console.log(itemc)
        if(itemc.imag.endsWith(item.payload.val().imag) && mail === item.payload.val().email )
        {
          this.cartList.remove(String(item.key))
        }
          })
        
      
        })
        })
    
//   this.cartitems.splice(index,  1);
alert("Item removed from cart")

//console.log(this.cartitems)
  }
  getOrdersFromFirebase(){
   return  this.orderList;
  }
  
  
 
  addOrdersToFirebase(order:any){
  this.orderList.push(order);
  alert("order placed");
  //window.location.href="/web/"
  }
 addUsersTOFirebase(user:any){
  this.userList.push(user);
  alert("profile created");
 }
updateUsers(key:string,email:string,uname:string,mobile:string,addr:string){
 this.updateList.set(key,{0:{
  username:uname,mobileno:mobile,emailadd:email,address:addr
}}) ;
}
removeOrders(key:string)
{
  this.orderList.remove(key)
  alert("order removed")
}
removeQuery(key:string)
{
  this.contactList.remove(key)
  alert("Query removed")
}
contactAdd(contact:any)
{
  this.contactList.push(contact);
  alert("message sent successfully")

}
}
