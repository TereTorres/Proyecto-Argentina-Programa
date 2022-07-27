package com.ProyectoFinal.TereTorres.Controller;

import com.ProyectoFinal.TereTorres.Entity.Persona;
import com.ProyectoFinal.TereTorres.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonaController {
    
    @Autowired IPersonaService iPersonaService;
    
    @GetMapping("/personas/traer")
    public List<Persona> getPersona(){
        return iPersonaService.getPersona();
    }
    
    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona per){
        
        iPersonaService.savePersona(per);
        return "Persona creada correctamente";
    }
    
    @DeleteMapping("personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        
        iPersonaService.deletePersona(id);
        return "Persona borrada correctamente";
    }
    
    @PutMapping("personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
                                @RequestParam("nombre") String nombre,
                                @RequestParam("apellido") String apellido,
                                @RequestParam("img") String img){
        Persona per = iPersonaService.findPersona(id);
        per.setNombre(nombre);
        per.setApellido(apellido);
        per.setImg(img);
        iPersonaService.savePersona(per);
        return per;
    }
    
}