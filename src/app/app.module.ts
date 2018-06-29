import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
// import { AWS } from 'aws-sdk/dist/aws-sdk.min.js';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTabsModule } from '@angular/material';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PanelD3Component } from './panel-d3/panel-d3.component';
import { PanelFancyFormsComponent } from './panel-fancy-forms/panel-fancy-forms.component';
import { PanelInitialComponent } from './panel-initial/panel-initial.component';
import { PanelContactComponent } from './panel-contact/panel-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PanelCaramelloCaserComponent } from './panel-caramello-caser/panel-caramello-caser.component';
import { PanelInteractiveCvComponent } from './panel-interactive-cv/panel-interactive-cv.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PanelD3Component,
    PanelFancyFormsComponent,
    PanelInitialComponent,
    PanelContactComponent,
    PanelCaramelloCaserComponent,
    PanelInteractiveCvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    //AWS,
    HttpClientModule, 
    AngularSvgIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
