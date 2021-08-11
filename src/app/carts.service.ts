import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor() { }
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
}
