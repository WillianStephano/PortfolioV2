import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/models/projeto';
import { ProjetosService } from 'src/app/services/projetos.service';
import { DetalhesProjetoComponent } from '../detalhes-projeto/detalhes-projeto.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  colecaoDeProjetos: Observable<Projeto[]>;

  constructor(
    private serviceProjetos: ProjetosService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.colecaoDeProjetos = this.serviceProjetos.listaProjetos();
  }

  abrirDetalhesDoProjeto() {
    return this.router.navigate([`projeto`]);
  }

  abreProjeto(id: number) {
    this.dialog.open(DetalhesProjetoComponent, {
      data: id,
    });
  }
}
