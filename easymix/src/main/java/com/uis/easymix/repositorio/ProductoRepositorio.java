package com.uis.easymix.repositorio;

import com.uis.easymix.modelo.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepositorio extends JpaRepository<Producto, Long> {
    
}
