import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../shared/produtos.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public produtos: Array<Produto> = []

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    //this.produtos = this.produtosService.getProdutos()

    this.produtosService.getProdutos()
     .subscribe((produtos: Produto[]) => {
        this.produtos = produtos 
     },
     (error: any) => {console.log(error)})
     
    
  }

}
