import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeShoesComponent } from './home-shoes/home-shoes.component';
import { BannersComponent } from './banners/banners.component';
import { HomeSportComponent } from './home-sport/home-sport.component';
import { BannerHeaderComponent } from './banner-header/banner-header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NikeService } from './nike.service';
import { ShoesDetailsComponent } from './shoes-details/shoes-details.component';
import { ListComponent } from './list/list.component';
import { SideOfListComponent } from './side-of-list/side-of-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleOfSearchComponent } from './title-of-search/title-of-search.component';
import { BasketComponent } from './basket/basket.component';
import { AddedToBasketComponent } from './added-to-basket/added-to-basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TrimDirective } from './trim.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeShoesComponent,
    BannersComponent,
    HomeSportComponent,
    BannerHeaderComponent,
    ShoesDetailsComponent,
    ListComponent,
    SideOfListComponent,
    TitleOfSearchComponent,
    BasketComponent,
    AddedToBasketComponent,
    CheckoutComponent,
    TrimDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
