import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../shared/produtos.model';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.css']
})
export class ComputadoresComponent implements OnInit {

  public produtos: Produto[] = []

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getProdutosPorTitulo('Computadores')
      .subscribe((res: Produto[]) => 
        this.produtos = res,
      (error) => console.log(error))
  }

}
