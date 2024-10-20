package com.uis.easymix.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = Proveedor.TABLE_NAME)
public class Proveedor {
    public static final String TABLE_NAME = "Proveedor";
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="proveedor_nombre")
    private String nombre;
    
    @Column(name="proveedor_contacto")
    private String contacto;
    
    public Proveedor() {
        
    }

    public Proveedor(Long id,String nombre, String contacto) {
        this.id = id;
        this.nombre = nombre;
        this.contacto = contacto;
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public String getContacton() {
        return contacto;
    }
    
    public void setContacton(String contacto) {
        this.contacto = contacto;
    }
}

