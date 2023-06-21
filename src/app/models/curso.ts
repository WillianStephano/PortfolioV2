export interface Curso {
  cursosConcluidos: {
    nome: string;
    link: string;
  }[],
  cursosEmAndamento: {
    nome: string;
    link: string;
  }[];
}
