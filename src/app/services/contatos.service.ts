import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Contato } from '../models/contato';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatosService {
  private readonly API = '../../assets/';

  constructor(private http: HttpClient) {}

  listaContatos() {
    return this.http
      .get<Contato[]>(this.API + 'dados.json')
      .pipe(tap((contato) => console.log(contato)));
  }
}
