export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: 'cafe' | 'salgado';
  tags: string[];
  destaque: boolean;
  disponivel: boolean;
}
