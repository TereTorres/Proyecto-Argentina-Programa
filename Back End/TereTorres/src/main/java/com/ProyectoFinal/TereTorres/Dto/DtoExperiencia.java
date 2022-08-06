package com.ProyectoFinal.TereTorres.Dto;

import java.util.Date;
import javax.validation.constraints.NotBlank;

public class DtoExperiencia {

    @NotBlank
    private String nombreExp;
    @NotBlank
    private int añoIngreso;
    @NotBlank
    private int añoEgreso;
    @NotBlank
    private String cargoExp;
    @NotBlank
    private String descripcionExp; 

    public DtoExperiencia() {
    }

    public DtoExperiencia(String nombreExp, int añoIngreso, int añoEgreso, String cargoExp, String descripcionExp) {
        this.nombreExp = nombreExp;
        this.añoIngreso = añoIngreso;
        this.añoEgreso = añoEgreso;
        this.cargoExp = cargoExp;
        this.descripcionExp = descripcionExp;
    }

    public String getNombreExp() {
        return nombreExp;
    }

    public void setNombreExp(String nombreExp) {
        this.nombreExp = nombreExp;
    }

    public int getAñoIngreso() {
        return añoIngreso;
    }

    public void setAñoIngreso(int añoIngreso) {
        this.añoIngreso = añoIngreso;
    }

    public int getAñoEgreso() {
        return añoEgreso;
    }

    public void setAñoEgreso(int añoEgreso) {
        this.añoEgreso = añoEgreso;
    }

    public String getCargoExp() {
        return cargoExp;
    }

    public void setCargoExp(String cargoExp) {
        this.cargoExp = cargoExp;
    }

    public String getDescripcionExp() {
        return descripcionExp;
    }

    public void setDescripcionExp(String descripcionExp) {
        this.descripcionExp = descripcionExp;
    }
    
    
}
