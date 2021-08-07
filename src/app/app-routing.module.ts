import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Homedetails2Component } from './homedetails2/homedetails2.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'home',component : HomeComponent},
{path:'about',component : AboutComponent},
{path:'login',component : LoginComponent},
{path:'signup',component : SignupComponent},
{path:'products',component : ProductsComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent,AboutComponent,LoginComponent,SignupComponent,ProductsComponent]
