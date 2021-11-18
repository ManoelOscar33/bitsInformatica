import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_b } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../shared/produtos.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public produto: any;
  public produtos: any;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.carrinhoService.exibirItens();

    this.route.params.subscribe((parametros: Params) => { 
      this.produtosService.getProdutosPorId(parametros.id)
        .then((res: any) => this.produto = res)
    })  
  }

  public adicionarItemCarrinho(produto: Produto): void {
    this.carrinhoService.incluirItem(produto)
    console.log(this.carrinhoService.exibirItens())
  }


}
