import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems=[  {imag:'chjs',price:'19'}
];
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
  evt.target.parentElement.remove()
}







}
