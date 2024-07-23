package com.kassio_kebra_td.project.service;

import org.springframework.stereotype.Service;

import com.kassio_kebra_td.project.model.Cliente;
import com.kassio_kebra_td.project.repository.ClienteRepository;

@Service
public class ClienteService {

    ClienteRepository repository;


    public ClienteService(ClienteRepository repository){
        this.repository = repository;

    }

    public void salvarCliente(Cliente cliente){
        validarCliente(cliente);
        //this.repository.persistir(cliente);

    }

    public void validarCliente(Cliente cliente){
        //Validar Cliente
    }

}
