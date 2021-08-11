import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems:any=[];
  constructor(private _cartsService: CartsService) { }

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







}
