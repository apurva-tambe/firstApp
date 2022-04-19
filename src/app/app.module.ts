import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SamplePageComponent } from './sample-page/sample-page.component';
import { VisitUsComponent } from './visit-us/visit-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SamplePageComponent,
    VisitUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
