import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _cartsService: CartsService,public firebaseSerivce: FirebaseService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.cartitems = this._cartsService.getcartitems();
  }
  items = [
{ name:'item1' ,imag:'assets/img/pr1.jpg',id:'pr1',cost : '18'},
{ name:'item2' ,imag:'assets/img/pr2.jpeg',id:'pr2',cost : '12'},
{ name:'item3' ,imag:'assets/img/pr3.jpg',id:'pr3',cost : '17'},
{ name:'item4' ,imag:'assets/img/pr4.jpg',id:'pr4',cost : '21'},
{ name:'item5' ,imag:'assets/img/pr5.jpg',id:'pr5',cost : '23'},
{ name:'item6' ,imag:'assets/img/pr6.jpg',id:'pr6',cost : '15'},
{ name:'item7' ,imag:'assets/img/pr7.jpg',id:'pr7',cost : '25'},
{ name:'item8' ,imag:'assets/img/pr8.jpeg',id:'pr8',cost : '24'}
];

fullopen(evt:any)
{
  var v=evt.target.parentElement.childNodes[2].style.display="block";
}
fullclose(evt:any){
  var v=evt.target.parentElement.parentElement.style.display="none";
}
cartitems:any=[];

  addtocart(image:any,cost:any,namee:any){

   var ele={imag:image,price:cost,name:namee}
    this._cartsService.addcartitems(ele);
//   console.log(this.cartitems)

  }
 orderform:any;
 orderarray:any;
 randid:any;

 addtodb(itemname:string,itemcost:string,itemurl:string)
 { 
  this.randid=  Math.floor(Math.random() * (10000000000 - 1000000000)) + 1000000000;
  this.firebaseSerivce.getUsers().subscribe(list=>{
    this.orderarray=list.map(item=>{
      this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
     //   console.log(item.payload.val()[0].emailadd,user?.email)
        if(item.payload.val()[0].emailadd===user?.email)
        { 
     console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
     this.orderform=[{orderid:this.randid,name:itemname,price:itemcost,image:itemurl,username:item.payload.val()[0].username,address:item.payload.val()[0].address,mobileno:item.payload.val()[0].mobileno,email:item.payload.val()[0].emailadd}];
     this._cartsService.addOrdersToFirebase(this.orderform);   
    }
          
        })
    //  console.log(item.payload.val()[0].emailadd)
      
    
      })
      })
   
 }
 
tc=0;
calc(num:string,cost:string)
{
  this.tc=0;
  this.tc=Number(num)*Number(cost);
  let element = <HTMLInputElement>document.getElementsByClassName("ful-rate")[0]
  element.value = String(this.tc)
 // alert(this.tc)

}
}
