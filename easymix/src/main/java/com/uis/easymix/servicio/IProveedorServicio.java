package com.uis.easymix.servicio;

import com.uis.easymix.modelo.Proveedor;

import java.util.List;

public interface IProveedorServicio {
    List<Proveedor> getProveedores();

    Proveedor guardarProveedores(Proveedor proveedor);

    Proveedor buscarProveedores(Long id);

    int borrarProveedores(Long id);
}
