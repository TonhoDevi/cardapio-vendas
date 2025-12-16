import { Component } from '@angular/core';
import { Cardapio } from './pages/cardapio/cardapio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cardapio],
  template: `<app-cardapio></app-cardapio>`
})
export class App {}
