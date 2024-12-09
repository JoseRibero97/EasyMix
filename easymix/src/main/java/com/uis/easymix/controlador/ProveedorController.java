package com.uis.easymix.controlador;

import com.uis.easymix.modelo.Proveedor;
import com.uis.easymix.servicio.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/proveedor")
public class ProveedorController {
    @Autowired
    private ProveedorService proveedorService;

    @GetMapping("/registros")
    public List<Proveedor> mostrarProveedores(){
        return proveedorService.getProveedores();
    }
    
    @GetMapping("/registros/{id}")
    public Proveedor buscarProveedorId(@PathVariable Long id){
        return proveedorService.buscarProveedores(id);
    }

    @PostMapping("/")
    public ResponseEntity<Proveedor> agregar(@RequestBody Proveedor proveedor){
        return new ResponseEntity<>(proveedorService.guardarProveedores(proveedor), HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<Proveedor> editar(@RequestBody Proveedor proveedor){
        Proveedor obj = proveedorService.buscarProveedores(proveedor.getId());
        if(obj != null){
            obj.setNombre(proveedor.getNombre());
            obj.setContacto(proveedor.getContacto());
            proveedorService.guardarProveedores(obj);
            return new ResponseEntity<>(obj, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Proveedor> borrar(@PathVariable Long id){
        Proveedor obj = proveedorService.buscarProveedores(id);
        if(obj != null){
            proveedorService.borrarProveedores(id);
            return new ResponseEntity<>(obj, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
