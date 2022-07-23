package com.portfolio.TereTorres.service;

import com.portfolio.TereTorres.Interface.IPersonaService;
import com.portfolio.TereTorres.entity.Persona;
import com.portfolio.TereTorres.repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService {
    
    @Autowired IPersonaRepository iPersonaRepository;
    
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = iPersonaRepository.findAll();
        return persona;
    }

    @Override
    public void savePersona(Persona pers) {
        iPersonaRepository.save(pers);
    }

    @Override
    public void deletePersona(Long id) {
        iPersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona pers = iPersonaRepository.findById(id).orElse(null);
        return pers;
    }
    
}
