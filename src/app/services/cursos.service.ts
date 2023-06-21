import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = '../../assets/dados/';

  constructor(private http: HttpClient) {}

  listaCursosConcluidos() {
    return this.http
      .get<Curso[]>(this.API + 'cursos.json')
      .pipe(tap((Curso) => console.log(Curso)));
  }
}
