package com.kassio_kebra_td.project.controller.exception;

import java.util.Arrays;
import java.util.List;
import lombok.Getter;

public class ApiErrors {
    @Getter
    private List<String> erros;

    public ApiErrors(List<String> erros){
        this.erros = erros;
    }
    public ApiErrors(String message){
        this.erros = Arrays.asList(message);

    }

}
