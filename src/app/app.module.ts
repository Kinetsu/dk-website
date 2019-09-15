import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { CarouselMainComponent } from './home/carousel-main/carousel-main.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './home/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarTopComponent,
    CarouselMainComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
