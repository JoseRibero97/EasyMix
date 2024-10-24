package com.uis.easymix.modelo;

import jakarta.annotation.sql.DataSourceDefinitions;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = Proveedor.TABLE_NAME)
public class Proveedor {
    public static final String TABLE_NAME = "proveedor";
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="nombre")
    private String nombre;
    
    @Column(name="contacto")
    private String contacto;
    
    public Long getId(){
        return id;
    }
    
    public void setId(Long id){
        this.id = id;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getContacto() {
        return contacto;
    }

    public void setContacto(String email) {
        this.contacto = email;
    }
}

