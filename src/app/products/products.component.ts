import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = [
{ name:'item1' ,imag:'assets/img/pr1.jpg',id:'pr1'},
{ name:'item2' ,imag:'assets/img/pr2.jpeg',id:'pr2'},
{ name:'item3' ,imag:'assets/img/pr3.jpg',id:'pr3'},
{ name:'item4' ,imag:'assets/img/pr4.jpeg',id:'pr4'},
{ name:'item5' ,imag:'assets/img/pr5.jpg',id:'pr5'},
{ name:'item6' ,imag:'assets/img/pr6.jpeg',id:'pr6'},
{ name:'item7' ,imag:'assets/img/pr7.jpg',id:'pr7'},
{ name:'item8' ,imag:'assets/img/pr8.jpeg',id:'pr8'}
];

fullopen(evt:any)
{
  var v=evt.target.parentElement.childNodes[2].style.display="block";
}
fullclose(evt:any){
  var v=evt.target.parentElement.parentElement.style.display="none";
}
}
