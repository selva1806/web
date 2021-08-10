import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor() { }
public cartitems = [
  {imag:'chjs',price:'19'},     


];
 addcartitems(item:any){

  this.cartitems.push(item);
  console.log(this.cartitems)
 }
  getcartitems()
  {
    return this.cartitems;
  }
}
