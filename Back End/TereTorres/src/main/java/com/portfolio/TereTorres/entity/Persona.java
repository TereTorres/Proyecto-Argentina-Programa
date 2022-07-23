package com.portfolio.TereTorres.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPersona;
    
    @NotNull
    @Size(min=1, max=50, message="No cumple con la longitud")
    private String nombre;
    @NotNull
    @Size(min=1, max=50, message="No cumple con la longitud")
    private String apellido;
    /*@NotNull*/
    @Size(min=1, max=50, message="No cumple con la longitud")
    private String img;

    public Persona(Long idPersona, String nombre, String apellido, String img) {
        this.idPersona = idPersona;
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }

    public Persona() {
    }
    
    
}
