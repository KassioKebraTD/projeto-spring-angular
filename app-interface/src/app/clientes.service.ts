import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(){}

  getCliente() : Cliente {
    let cliente: Cliente = new Cliente('Fulano de Tal', '888888');
    return cliente;
  }
}
