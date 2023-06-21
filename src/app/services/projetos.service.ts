import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projeto } from '../models/projeto';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  private readonly API = '../../assets/dados/';
  constructor(private http: HttpClient) {}

  listaProjetos() {
    return this.http
      .get<Projeto[]>(this.API + 'projetos.json')
      .pipe(tap((projeto) => console.log(projeto)));
  }
}
