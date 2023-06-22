import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProjetoComponent } from './componentes/detalhes-projeto/detalhes-projeto.component';

const routes: Routes = [
  {
    path: 'projeto',
    component: DetalhesProjetoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
