import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RoutingComponent } from '../app-routing.module';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-calogin',
  templateUrl: './calogin.component.html',
  styleUrls: ['./calogin.component.css']
})
export class CaloginComponent implements OnInit {

  constructor(public firebaseService: FirebaseService,public router: Router) { }

  ngOnInit(): void {
  }
  checkadmin()
  {
    this.firebaseService.firebaseAuth.onAuthStateChanged(user=>{
      if(user?.email==="ss@gmail.com")
      {
        this.router.navigate(['/admin']);
      }
      
    })
  }

}
