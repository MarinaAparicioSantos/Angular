import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { GhibliComponent } from './ghibli/ghibli.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component'
@NgModule({
  declarations: [
    AppComponent,
    GhibliComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
