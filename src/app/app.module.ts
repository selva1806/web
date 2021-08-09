import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { Homedetails2Component } from './homedetails2/homedetails2.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ReachinfoComponent } from './reachinfo/reachinfo.component';
import { LoginComponent } from './login/login.component';
import { ButtnComponent } from './buttn/buttn.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ProductdisComponent } from './productdis/productdis.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    CarouselComponent,
    HomedetailsComponent,
    Homedetails2Component,
    LocationComponent,
    ContactComponent,
    FooterComponent,
    RoutingComponent,
    AboutComponent,
    ReachinfoComponent,
    LoginComponent,
    ButtnComponent,
    SignupComponent,
    ProductsComponent,
    ProductdisComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
