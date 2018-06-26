import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTabsModule } from '@angular/material';

import { HomeComponent } from './home/home.component';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PanelD3Component } from './panel-d3/panel-d3.component';
import { PanelFancyFormsComponent } from './panel-fancy-forms/panel-fancy-forms.component';
import { PanelInitialComponent } from './panel-initial/panel-initial.component';
import { PanelContactComponent } from './panel-contact/panel-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaterialNavComponent,
    MatDashboardComponent,
    HeaderComponent,
    PanelD3Component,
    PanelFancyFormsComponent,
    PanelInitialComponent,
    PanelContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
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
