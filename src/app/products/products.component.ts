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
    
    this.firebaseSerivce.getUsers().subscribe(list=>{
      this.orderarray=list.map(item=>{
        this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
       //  console.log(item.payload.val()[0].emailadd,user?.email)
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
  }



  items = [
{ name:'white limbus sheet',p:'The sheet is white in colour with dimensions starting according to the customer requirement.' ,imag:'assets/img/pr1.jpg',id:'pr1',cost : '849'},
{ name:'grey limbus asbestos sheet',p:'These light blue sheets are dried in the sun for a longer period to make it strong and long lasting.' ,imag:'assets/img/pr2.jpeg',id:'pr2',cost : '235'},
{ name:'blue cobe asbestos sheet',p:'The sheet is available in dark blue colour. The sheets has a higher density.' ,imag:'assets/img/pr3.jpg',id:'pr3',cost : '190'},
{ name:'sandal trax sheet',p:'These sheets are cut into longer dimensions and are double folded.' ,imag:'assets/img/pr4.jpg',id:'pr4',cost : '625'},
{ name:'white hana sheet',p:'The sheets are small compared to other products available. They are smaller in density.' ,imag:'assets/img/pr5.jpg',id:'pr5',cost : '580'},
{ name:'rasan blue sheet',p:'The blue sheets are more flexible.' ,imag:'assets/img/pr6.jpg',id:'pr6',cost : '499'},
{ name:'whitish brown sheet',p:'These sheets are cut into longer dimensions and are double folded.' ,imag:'assets/img/pr7.jpg',id:'pr7',cost : '799'},
{ name:'darkblue yagu sheet',p:'The sheets has a higher density.The Dark blue sheets are more flexible.' ,imag:'assets/img/pr8.jpeg',id:'pr8',cost : '699'}
];
name:String | undefined
email:String | undefined
mobile:String | undefined
add:String | undefined
fullopen(evt:any)
{
  var v=evt.target.parentElement.childNodes[2].style.display="block";
}
fullclose(evt:any){
  var v=evt.target.parentElement.parentElement.style.display="none";
}
cartitems:any=[];

  addtocart(image:any,cost:any,namee:any,quantity:any){
    if(this.name === undefined)
    {
      alert("please login")
    }
    else
    {
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
  
  var ele={imag:image,price:cost,name:namee,quantity:quantity,uname:this.name,email:this.email}
    this._cartsService.addcartitems(ele);
            console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
  
      }
            
          })
      //  console.log(item.payload.val()[0].emailadd)
        
      
        })
        })
   
//   console.log(this.cartitems)
}
  }

 orderform:any;
 orderarray:any;
 randid:any;

 addtodb(itemname:string,itemcost:string,itemurl:string,quantity:string)
 { 
  if(this.name === undefined)
  {
    alert("please login")
  }
  else{

  this.randid=  Math.floor(Math.random() * (10000000000 - 1000000000)) + 1000000000;
  this.firebaseSerivce.getUsers().subscribe(list=>{
    this.orderarray=list.map(item=>{

      this.firebaseSerivce.firebaseAuth.onAuthStateChanged(user=>{
     //   console.log(item.payload.val()[0].emailadd,user?.email)
     
        if(item.payload.val()[0].emailadd===user?.email)
        { 
          if(this.orderform!==null)
     {
     console.log(item.payload.val()[0].address,item.payload.val()[0].mobileno,item.payload.val()[0].username)
     this.orderform=[{orderid:this.randid,name:itemname,price:itemcost,image:itemurl,username:item.payload.val()[0].username,address:item.payload.val()[0].address,mobileno:item.payload.val()[0].mobileno,email:item.payload.val()[0].emailadd,quantity:quantity}];
     this._cartsService.addOrdersToFirebase(this.orderform);  
     this.orderform=null; 
    }
  }
          
        })
    //  console.log(item.payload.val()[0].emailadd)
      
    
      })
      })
    }
 }
 show(evt:any){
  var v=evt.target;
  v.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].style.display="block";
  
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
tc=0;
calc(evt:any,num:string,cost:string)
{
  this.tc=0;
  this.tc=Number(num)*Number(cost);
  evt.target.parentElement.parentElement.parentElement.parentElement.childNodes[6].innerHTML="₹"+this.tc;
  evt.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[3].innerHTML="Total:₹"+this.tc;

  

 // alert(this.tc)
 // v?.setAttribute("value",String(this.tc));

}

}
