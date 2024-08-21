import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit {

  cliente = {
    nome: 'Fulano',
    cpf: '001',
    dataCadastro: new Date(),
    id: 0
  };

  constructor() { }

  ngOnInit(): void { }
  clicar() {
    console.log(this.cliente);
  }
  onSubmit() {
    console.log(this.cliente);
  }

}
