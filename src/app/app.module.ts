import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TranslateService } from './translate.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { CarouselMainComponent } from './home/carousel-main/carousel-main.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './home/news/news.component';
import { TranslatePipe } from './translate.pipe';
import { ServerInfoComponent } from './home/server-info/server-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarTopComponent,
    CarouselMainComponent,
    HomeComponent,
    NewsComponent,
    TranslatePipe,
    ServerInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
