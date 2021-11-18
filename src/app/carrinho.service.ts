import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho-model';
import { Produto } from './shared/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens: ItemCarrinho[] = [];

  constructor() { }

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(produto: Produto): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      produto.id,
      produto.imagem,
      produto.titulo,
      produto.descricao,
      produto.valor,
      1
    )

    //Verificar se o item em questão já não existe dentro do this.itens
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if(itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1
    } else {
      this.itens.push(itemCarrinho)
    }
  }

  public totalCarrinhoCompras(): number {
    let total: number = 0;

    this.itens.map((item: ItemCarrinho) => {
      total = total + (item.valor * item.quantidade)
    })
    return total;
  }

  public adicionarItem(itemCarrinho: ItemCarrinho): void {
    console.log(itemCarrinho)

    //Incrementar quantidade
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if(itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1
    } 
  }
  
  public diminuirItem(itemCarrinho: ItemCarrinho): void {
    console.log(itemCarrinho)

    //Decrementar quantidade
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if(itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1

      if(itemCarrinhoEncontrado.quantidade === 0) {
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
      }
    } 
  }

  public limparCarrinho(): void {
    this.itens = [];
  }
}
