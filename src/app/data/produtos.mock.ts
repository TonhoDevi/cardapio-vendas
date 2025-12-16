import { Produto } from '../core/models/produto.model';

export const PRODUTOS: Produto[] = [

  // ☕ CAFÉS (6)
  {
    id: 1,
    nome: 'Espresso Supremo',
    descricao: 'Blend exclusivo de grãos arábicos com notas de chocolate amargo e caramelo.',
    preco: 12,
    categoria: 'cafe',
    tags: ['intenso', 'quente'],
    destaque: true,
    disponivel: true
  },
  {
    id: 2,
    nome: 'Cappuccino Tradicional',
    descricao: 'Espresso cremoso com leite vaporizado e espuma aveludada.',
    preco: 14,
    categoria: 'cafe',
    tags: ['classico', 'cremoso'],
    destaque: false,
    disponivel: true
  },
  {
    id: 3,
    nome: 'Latte Caramelo',
    descricao: 'Café suave com leite vaporizado e calda de caramelo artesanal.',
    preco: 16,
    categoria: 'cafe',
    tags: ['doce', 'premium'],
    destaque: false,
    disponivel: true
  },
  {
    id: 4,
    nome: 'Mocha Belga',
    descricao: 'Espresso com chocolate belga derretido e chantilly.',
    preco: 17,
    categoria: 'cafe',
    tags: ['chocolate', 'indulgente'],
    destaque: false,
    disponivel: true
  },
  {
    id: 5,
    nome: 'Cold Brew',
    descricao: 'Café extraído a frio por 18 horas, sabor suave e naturalmente adocicado.',
    preco: 15,
    categoria: 'cafe',
    tags: ['gelado', 'refrescante'],
    destaque: false,
    disponivel: true
  },
  {
    id: 6,
    nome: 'Affogato',
    descricao: 'Sorvete de baunilha artesanal afogado em espresso quente.',
    preco: 18,
    categoria: 'cafe',
    tags: ['sobremesa', 'especial'],
    destaque: true,
    disponivel: true
  },

  // 🥐 SALGADOS (6)
  {
    id: 7,
    nome: 'Croissant Francês',
    descricao: 'Massa folhada crocante e amanteigada com fermentação lenta.',
    preco: 9,
    categoria: 'salgado',
    tags: ['tradicional'],
    destaque: false,
    disponivel: true
  },
  {
    id: 8,
    nome: 'Pão de Queijo Mineiro',
    descricao: 'Receita tradicional mineira, crocante por fora e macio por dentro.',
    preco: 8,
    categoria: 'salgado',
    tags: ['caseiro'],
    destaque: false,
    disponivel: true
  },
  {
    id: 9,
    nome: 'Sanduíche Artesanal',
    descricao: 'Ciabatta com peito de peru, queijo brie, rúcula e geleia de pimenta.',
    preco: 16,
    categoria: 'salgado',
    tags: ['premium'],
    destaque: true,
    disponivel: true
  },
  {
    id: 10,
    nome: 'Empada de Frango',
    descricao: 'Empada artesanal recheada com frango temperado.',
    preco: 7,
    categoria: 'salgado',
    tags: ['classico'],
    destaque: false,
    disponivel: true
  },
  {
    id: 11,
    nome: 'Quiche de Alho-Poró',
    descricao: 'Quiche cremosa com alho-poró e queijo gruyère.',
    preco: 14,
    categoria: 'salgado',
    tags: ['leve'],
    destaque: false,
    disponivel: true
  },
  {
    id: 12,
    nome: 'Focaccia Italiana',
    descricao: 'Pão artesanal com azeite, alecrim e sal grosso.',
    preco: 10,
    categoria: 'salgado',
    tags: ['artesanal'],
    destaque: false,
    disponivel: true
  }

];

