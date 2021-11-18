import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { CadeirasGamerComponent } from './cadeiras-gamer/cadeiras-gamer.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemcomprasucessoComponent } from './ordemcomprasucesso/ordemcomprasucesso.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { TrabalheconoscoComponent } from './trabalheconosco/trabalheconosco.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'computadores', component: ComputadoresComponent},
  {path:'notebooks', component: NotebooksComponent},
  {path:'cadeiras-gamer', component: CadeirasGamerComponent},
  {path:'acessorios', component: AcessoriosComponent},
  {path:'ordemcompra', component: OrdemCompraComponent},
  {path:'ordemcomprasucesso', component: OrdemcomprasucessoComponent},
  {path:'produto', component: HomeComponent},
  {path:'produto/:id', component: ProdutoComponent},
  {path:'sobrenos', component: SobrenosComponent},
  {path:'trabalheconosco', component: TrabalheconoscoComponent},
  {path:'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
