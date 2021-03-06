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
import { NewsCardComponent } from './home/news-card/news-card.component';
import { TranslatePipe } from './translate.pipe';
import { ServerInfoCardComponent } from './home/server-info-card/server-info-card.component';
import { DownloadsCardComponent } from './home/downloads-card/downloads-card.component';
import { ServerStatusCardComponent } from './home/server-status-card/server-status-card.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatErrorsComponent } from './register-form/mat-errors/mat-errors.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingTableComponent } from './ranking/ranking-table/ranking-table.component';
import { BiblesComponent } from './bibles/bibles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarTopComponent,
    CarouselMainComponent,
    HomeComponent,
    NewsCardComponent,
    TranslatePipe,
    ServerInfoCardComponent,
    DownloadsCardComponent,
    ServerStatusCardComponent,
    RegisterFormComponent,
    MatErrorsComponent,
    RankingComponent,
    RankingTableComponent,
    BiblesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
