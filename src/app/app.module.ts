import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , RoutingComponent} from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
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
import { CartsService } from './carts.service';
import { BthomeComponent } from './bthome/bthome.component';
import { HomefrontComponent } from './homefront/homefront.component';
import { CaloginComponent } from './calogin/calogin.component';
import { ClinkComponent } from './clink/clink.component';
import { ScrollComponent } from './scroll/scroll.component';

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
    CartComponent,
    BthomeComponent,
    HomefrontComponent,
    CaloginComponent,
    ClinkComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy},CartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
