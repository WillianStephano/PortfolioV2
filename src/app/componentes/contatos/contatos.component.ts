import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Contato } from 'src/app/models/contato';
import { ContatosService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
})
export class ContatosComponent {
  colecaoContatos: Observable<Contato[]>;

  constructor(private contatoService: ContatosService) {
    this.colecaoContatos = this.contatoService.listaContatos();
  }
}
