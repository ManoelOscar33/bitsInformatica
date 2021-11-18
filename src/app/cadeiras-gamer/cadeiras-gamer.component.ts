import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../shared/produtos.model';

@Component({
  selector: 'app-cadeiras-gamer',
  templateUrl: './cadeiras-gamer.component.html',
  styleUrls: ['./cadeiras-gamer.component.css']
})
export class CadeirasGamerComponent implements OnInit {

  public produtos: Produto[] = []

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getProdutosPorTitulo('Cadeira Gamer')
      .subscribe((res: Produto[]) => 
        this.produtos = res,
      (error) => console.log(error))
  }
}
