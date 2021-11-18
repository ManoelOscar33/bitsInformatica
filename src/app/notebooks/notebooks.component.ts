import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../shared/produtos.model';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit {

  public produtos: Produto[] = []

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getProdutosPorTitulo('Notebook')
      .subscribe((res: Produto[]) => 
        this.produtos = res,
      (error) => console.log(error))
  }

}
