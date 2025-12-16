import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardapio.html',
  styleUrls: ['./cardapio.css']
})
export class Cardapio {

  cafes = [
    {
      nome: 'Espresso Supremo',
      preco: 'R$ 12,00',
      precoNumero: 12,
      descricao: 'Blend exclusivo de grãos arábicos da Colômbia e Etiópia, com notas de chocolate amargo e caramelo.',
      tags: ['MAIS VENDIDO', 'Intenso'],
      destaque: true
    },
    {
      nome: 'Cappuccino Tradicional',
      preco: 'R$ 14,00',
      precoNumero: 14,
      descricao: 'Espresso cremoso com leite vaporizado e espuma aveludada, finalizado com cacau belga.',
      tags: ['Clássico', 'Cremoso'],
      destaque: false
    },
    {
      nome: 'Latte Caramelo',
      preco: 'R$ 16,00',
      precoNumero: 16,
      descricao: 'Espresso suave com leite vaporizado e calda de caramelo artesanal.',
      tags: ['Doce', 'Premium'],
      destaque: false
    }
  ];
  pedido: any[] = [];

  total = 0;

  adicionarAoPedido(cafe: any) {
    this.pedido.push(cafe);
    this.total += cafe.precoNumero;
  }


}
