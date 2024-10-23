package com.uis.easymix.servicio;

import com.uis.easymix.modelo.Producto;
import com.uis.easymix.modelo.Proveedor;
import com.uis.easymix.repositorio.ProveedorRepositorio;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ProveedorService implements IProveedorServicio {

    @Autowired
    private ProveedorRepositorio proveedorRepositorio;

    @Override
    public List<Proveedor> getProveedores() {
        return proveedorRepositorio.findAll();
    }

    @Override
    public Proveedor guardarProveedores(Proveedor proveedor) {
        return proveedorRepositorio.save(proveedor);
    }

    @Override
    public Proveedor buscarProveedores(Long id) {
        return proveedorRepositorio.findById(id).orElse(null);
    }

    @Override
    public int borrarProveedores(Long id) {
        proveedorRepositorio.deleteById(id);
        return 1;
    }
}
