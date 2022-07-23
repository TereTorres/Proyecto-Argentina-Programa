package com.portfolio.TereTorres.controller;

import com.portfolio.TereTorres.Interface.IPersonaService;
import com.portfolio.TereTorres.entity.Persona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonaController {

    @Autowired IPersonaService iPersonaService;
    
    @GetMapping("/personas/traer")
    @ResponseBody
    public List<Persona> getPersona(){
        return iPersonaService.getPersona();
    }
    
    @PostMapping("/personas/guardar")
    public String savePersona(@RequestBody Persona pers){
        iPersonaService.savePersona(pers);
        return "Persona guardada correctamente";
    }
    
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        iPersonaService.deletePersona(id);
        return "Persona borrada correctamente";
    }
    
    @GetMapping("/personas/buscar")
    @ResponseBody
    public Persona findPersona(@RequestBody Long id){
        Persona pers = iPersonaService.findPersona(id);
        return pers;
    }
    
    @PutMapping("/personas/editar/{id}")
    public Persona editarPersona(@PathVariable Long id,
            @RequestParam("nombre") String nombre,
            @RequestParam("apellido") String apellido,
            @RequestParam("img") String img){
        Persona pers = iPersonaService.findPersona(id);
        pers.setApellido(apellido);
        pers.setNombre(nombre);
        pers.setImg(img);
        iPersonaService.savePersona(pers);
        return pers;
    }
}
