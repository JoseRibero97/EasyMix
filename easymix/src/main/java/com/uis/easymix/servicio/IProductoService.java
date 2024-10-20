package com.uis.easymix.servicio;

import com.uis.easymix.modelo.Producto;
import java.util.List;

public interface IProductoService {
    
    List<Producto> getProductos();
    
    Producto nuevoProducto(Producto producto);
    
    Producto buscarProducto(Long id);
    
    int borrarProducto(Long id);
    
}
