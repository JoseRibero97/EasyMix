package com.uis.easymix.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import com.uis.easymix.modelo.Proveedor;

public interface ProveedorRepositorio extends JpaRepository<Proveedor, Long>{
    
}
