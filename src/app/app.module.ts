import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { CadeirasGamerComponent } from './cadeiras-gamer/cadeiras-gamer.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { ProdutoComponent } from './produto/produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdemcomprasucessoComponent } from './ordemcomprasucesso/ordemcomprasucesso.component';

//Pipe
import { DescricaoReduzida } from './shared/descricao-reduzida.pipe';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { TrabalheconoscoComponent } from './trabalheconosco/trabalheconosco.component';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    FooterComponent,
    ComputadoresComponent,
    NotebooksComponent,
    CadeirasGamerComponent,
    AcessoriosComponent,
    OrdemCompraComponent,
    ProdutoComponent,
    OrdemcomprasucessoComponent,
    DescricaoReduzida,
    SobrenosComponent,
    TrabalheconoscoComponent,
    ContatoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-Br' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
