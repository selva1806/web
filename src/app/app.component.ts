import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mp2';
 
  isSignedIn=false;
  constructor(public firebaseSerivce: FirebaseService){}
    ngOnInit(){
  if(localStorage.getItem('user')!==null)
  {
    this.isSignedIn=true;
  }
  else{
    this.isSignedIn=false;
  }
    }
  
   
  
}
