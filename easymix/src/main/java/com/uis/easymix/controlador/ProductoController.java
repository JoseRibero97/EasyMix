package com.uis.easymix.controlador;

import com.uis.easymix.modelo.Producto;
import com.uis.easymix.servicio.ProductoService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/producto")
public class ProductoController {
    
    @Autowired
    ProductoService productoService;
    
    //Listar los Productos
    @CrossOrigin
    @GetMapping("/list")
    public List<Producto> cargarProductos() {
        return productoService.getProductos();
    }
    
    //Buscar por Id
    @CrossOrigin
    @GetMapping("/list/{id}")
    public Producto buscarPorId(@PathVariable Long id) {
        return productoService.buscarProducto(id);
    }
    
    //Agregar Producto
    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<Producto> agregar(@Valid @RequestBody Producto producto) {
        Producto obj = productoService.nuevoProducto(producto);
        return new ResponseEntity(obj, HttpStatus.OK);
    }
    
    //Actualizar el Producto
    @CrossOrigin
    @PutMapping("/")
    public ResponseEntity<Producto> editar(@Valid @RequestBody Producto producto) {
        Producto obj = productoService.nuevoProducto(producto);
        if (obj != null) { 
            obj.setIdProveedor(producto.getIdProveedor());
            obj.setIdUsuario(producto.getIdUsuario());
            obj.setNombre(producto.getNombre());
            obj.setDescripcion(producto.getDescripcion());
            obj.setMarca(producto.getMarca());
            obj.setPresentacion(producto.getPresentacion());
            obj.setCantidad(producto.getCantidad());
            obj.setMedida(producto.getMedida());
            productoService.nuevoProducto(obj);
        }else {
            return new ResponseEntity(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
            return new ResponseEntity(obj, HttpStatus.OK);
    }
    
    //Eliminar el Producto
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Producto> eliminar(@PathVariable Long id) {
        Producto obj = productoService.buscarProducto(id);
        if (obj != null) {
                productoService.borrarProducto(id);
        }else {
            return new ResponseEntity(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
            return new ResponseEntity(obj, HttpStatus.OK);
    }
    
}
