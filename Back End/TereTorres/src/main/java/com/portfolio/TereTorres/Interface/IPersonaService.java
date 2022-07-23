package com.portfolio.TereTorres.Interface;

import com.portfolio.TereTorres.entity.Persona;
import java.util.List;

public interface IPersonaService {
    
    //Traer
    public List<Persona> getPersona();
    
    //Guardar
    public void savePersona(Persona pers);
    
    //Eliminar x Id
    public void deletePersona(Long id);
    
    //Buscar
    public Persona findPersona(Long id);
}
