package com.ProyectoFinal.TereTorres.Repository;

import com.ProyectoFinal.TereTorres.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long>{
    
}
