import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUTOS } from '../../data/produtos.mock';
import { Produto } from '../../core/models/produto.model';
import { ItemPedido } from '../../core/models/itemPedido.model';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardapio.html',
  styleUrls: ['./cardapio.css']
})
export class Cardapio {

  produtos: Produto[] = PRODUTOS;
  cafes = PRODUTOS.filter(item => item.categoria === 'cafe');
  salgados = PRODUTOS.filter(p => p.categoria === 'salgado');

  pedido: ItemPedido[] = [];




  total = 0;

adicionarAoPedido(produto: Produto) {
  const itemExistente = this.pedido.find(
    item => item.produto.id === produto.id
  );

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    this.pedido.push({
      produto,
      quantidade: 1
    });
  }

  this.calcularTotal();
}



removerDoPedido(index: number) {
  const item = this.pedido[index];

  if (!item) return;

  if (item.quantidade > 1) {
    item.quantidade -= 1;
  } else {
    this.pedido.splice(index, 1);
  }

  this.calcularTotal();
}


calcularTotal() {
  this.total = this.pedido.reduce(
    (soma, item) => soma + item.produto.preco * item.quantidade,
    0
  );
}



}