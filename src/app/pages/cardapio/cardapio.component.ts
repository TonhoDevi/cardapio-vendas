import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {

  cafes = [
    {
      nome: 'Espresso Supremo',
      preco: 'R$ 12,00',
      descricao: 'Blend exclusivo de grãos arábicos da Colômbia e Etiópia, com notas de chocolate amargo e caramelo.',
      tags: ['MAIS VENDIDO', 'Intenso'],
      destaque: true
    },
    {
      nome: 'Cappuccino Tradicional',
      preco: 'R$ 14,00',
      descricao: 'Espresso cremoso com leite vaporizado e espuma aveludada, finalizado com cacau belga.',
      tags: ['Clássico', 'Cremoso'],
      destaque: false
    },
    {
      nome: 'Latte Caramelo',
      preco: 'R$ 16,00',
      descricao: 'Espresso suave com leite vaporizado e calda de caramelo artesanal.',
      tags: ['Doce', 'Premium'],
      destaque: false
    }
  ];

}
