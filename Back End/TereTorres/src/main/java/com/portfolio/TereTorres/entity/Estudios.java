package com.portfolio.TereTorres.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
public class Estudios {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEstudio;
    
    @NotNull
    @Size(min=1, max=50, message="Longitud incorrecta")
    private String titulo;
    
}
