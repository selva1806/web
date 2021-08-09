import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
opencart(){
    var v=document.getElementById("cart");
    v?.setAttribute("style","transform:translateX(0%);");
}
}
