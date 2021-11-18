import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject }from 'rxjs';

import 'rxjs-compat'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/switchMap'

import { ProdutosService } from '../produtos.service';
import { Produto } from '../shared/produtos.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public produtos$: Observable<Produto[]> = new Observable<Produto[]>();
  private subjectPesquisa: Subject<any> = new Subject<any>();

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos$ = this.subjectPesquisa 
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {

        if(termo.trim() === '') {
          //Retornar um observable de array de produtos vazio
          return Observable.of<Produto[]>([])
        }

        return this.produtosService.pesquisaProdutos(termo);
      })
      .catch((err: any) => {
        return Observable.of<Produto[]>([])
      })
    
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

}



