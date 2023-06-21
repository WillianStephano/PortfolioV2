import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { IntroComponent } from './componentes/intro/intro.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { HistoricoAcademicoComponent } from './componentes/historico-academico/historico-academico.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    IntroComponent,
    SobreComponent,
    ContatosComponent,
    ProjetosComponent,
    HistoricoAcademicoComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
