import { Observable } from 'rxjs/internal/Observable';
import { Component } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-historico-academico',
  templateUrl: './historico-academico.component.html',
  styleUrls: ['./historico-academico.component.scss'],
})
export class HistoricoAcademicoComponent {
  colecaoDeCursos: Observable<Curso[]>;

  constructor(private cursosService: CursosService) {
    this.colecaoDeCursos = this.cursosService.listaCursosConcluidos();
  }
}
