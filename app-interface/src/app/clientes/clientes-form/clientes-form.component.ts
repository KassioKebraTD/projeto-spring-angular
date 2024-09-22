import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  constructor(private service: ClientesService) {
    this.cliente = new Cliente();
    this.cliente.nome = 'Felippe';
    this.cliente.cpf = '03493988109'
  }

  ngOnInit(): void { }
  clicar() {
    console.log(this.cliente);
  }
  onSubmit() {
    this.service
      .salvar(this.cliente)
      .subscribe(response => {
        console.log(response);
      });
  }

}
