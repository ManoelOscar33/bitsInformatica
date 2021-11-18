import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import { OrdemCompraService } from '../ordem-compra.service';
import { ItemCarrinho } from '../shared/item-carrinho-model';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public idPedido: any;
  public itensCarrinho: ItemCarrinho[] = [];
  
  public formulario: FormGroup = new FormGroup({
    "endereco": new FormControl(null, [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    "numero": new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    "complemento": new FormControl(null),
    "formaPagamento": new FormControl(null, [ Validators.required])
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
    ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    console.log(this.itensCarrinho)
  }

  public confirmarCompra(): void {

    if(this.carrinhoService.exibirItens().length === 0) {

      alert('Você não selecionou nenhum item!')
    } else {

      let pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.carrinhoService.exibirItens()
      )

        console.log(pedido)
      
      this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((res: Pedido) => 
        {
          console.log(res.id)
          this.idPedido = res.id
          this.carrinhoService.limparCarrinho();
        })
    }
  }
  
  public adicionar(itemCarrinho: ItemCarrinho): void {
    this.carrinhoService.adicionarItem(itemCarrinho)
  }

  public diminuir(itemCarrinho: ItemCarrinho): void {
    this.carrinhoService.diminuirItem(itemCarrinho)
  }
}
