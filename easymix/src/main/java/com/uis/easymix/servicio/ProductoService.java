package com.uis.easymix.servicio;

import com.uis.easymix.modelo.Producto;
import com.uis.easymix.repositorio.ProductoRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProductoService implements IProductoService{
    
    @Autowired
    ProductoRepositorio productoRepositorio;
    
    @Override
    public List<Producto> getProductos() {
        return productoRepositorio.findAll();
    }

    @Override
    public Producto nuevoProducto(Producto producto) {
        return productoRepositorio.save(producto);
    }

    @Override
    public Producto buscarProducto(Long id) {
        Producto producto = null;
        producto = productoRepositorio.findById(id).orElse(null);
        if (producto == null) {
            return null;
        }
        return producto;
    }

    @Override
    public int borrarProducto(Long id) {
        productoRepositorio.deleteById(id);
        return 1;
    }
    
}
