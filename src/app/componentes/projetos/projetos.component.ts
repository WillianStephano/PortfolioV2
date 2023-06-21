import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/models/projeto';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  colecaoDeProjetos: Observable<Projeto[]>;

  constructor(private serviceProjetos: ProjetosService) {
    this.colecaoDeProjetos = this.serviceProjetos.listaProjetos();
  }
}
