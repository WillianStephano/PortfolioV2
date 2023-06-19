import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent, CabecalhoComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
