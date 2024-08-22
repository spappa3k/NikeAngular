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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeShoesComponent,
    BannersComponent,
    HomeSportComponent,
    BannerHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
