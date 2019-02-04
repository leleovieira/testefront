import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { AppRoutingModule } from './app.routing.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PublicModule,
    AppRoutingModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
