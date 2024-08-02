import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  cli1 = new Cliente('Fulano', 20);
  cli2 = new Cliente('Cicrano', 30);
  cli3 = new Cliente('Felippe', 24);
  clientes :Cliente[];
  constructor(){
    this.clientes = [this.cli1,this.cli2, this.cli3]
  }


}
export class Cliente {
  constructor(
    public nome: string,
    public idade: number
  ) { }
}
