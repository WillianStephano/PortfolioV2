import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/models/projeto';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-detalhes-projeto',
  templateUrl: './detalhes-projeto.component.html',
  styleUrls: ['./detalhes-projeto.component.scss'],
})
export class DetalhesProjetoComponent {
  projeto!: Observable<Projeto[]>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public id: number,
    private projetosService: ProjetosService
  ) {
    //this.dadosDoProjeto = this.projetosService.listaProjetos();

    this.projeto = this.projetosService.selecionaProjeto(id);
    console.log(id);
  }
}
