import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StepFormModule } from './step-form/step-form.module';
import { InitialComponent } from './simple-form/initial/initial.component';
import { SecondComponent } from './simple-form/second/second.component';
import { SimpleFormModule } from './simple-form/simple-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StepFormModule,
    SimpleFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
