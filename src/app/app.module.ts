import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SoSearchModule } from 'src/app/so-search/so-search.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    SoSearchModule,
    BrowserModule,
    AppRoutingModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
