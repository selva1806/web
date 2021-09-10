import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
private orderList:AngularFireList<any>;
private userList:AngularFireList<any>;
private updateList:AngularFireList<any>;

  constructor(  private firebase: AngularFireDatabase) {
  this.orderList=this.firebase.list('orders');
  this.userList=this.firebase.list('users');
  this.updateList=this.firebase.list('users');

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
  console.log(this.cartitems)
  alert("Item added to cart")

  } 
}
  getcartitems()
  {
    return this.cartitems;
  }
  removecartitems(item:any){
   // const id = this.cartitems.array.indexOf(item);
   var index;

  for(var i=0;i<this.cartitems.length;i++)
  {
    if(item.imag.endsWith(this.cartitems[i].imag ) )
    {
     index=i;
     console.log(index)
     // console.log(this.cartitems[i].imag)
    }
   
  }
   this.cartitems.splice(index,  1);
//console.log(this.cartitems)
  }
  getOrdersFromFirebase(){
   return  this.orderList;
  }
  addOrdersToFirebase(order:any){
  this.orderList.push(order);
  alert("order placed");
  window.location.href="/web/"
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
}
