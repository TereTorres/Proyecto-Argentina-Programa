package com.ProyectoFinal.TereTorres.Service;

import com.ProyectoFinal.TereTorres.Entity.Persona;
import com.ProyectoFinal.TereTorres.Interface.IPersonaService;
import com.ProyectoFinal.TereTorres.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService{

    @Autowired IPersonaRepository IPersonaRepository;
            
    @Override
    public List<Persona> getPersona() {
        
        List<Persona> listaPersonas = IPersonaRepository.findAll();
        return listaPersonas;
    }

    @Override
    public void savePersona(Persona per) {
        
        IPersonaRepository.save(per);
    }

    @Override
    public void deletePersona(Long id) {
        
        IPersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        
        Persona per = IPersonaRepository.findById(id).orElse(null);
        return per;
    }
    
}
