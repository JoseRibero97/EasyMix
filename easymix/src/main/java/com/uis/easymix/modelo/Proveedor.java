package com.uis.easymix.modelo;

import jakarta.annotation.sql.DataSourceDefinitions;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = Proveedor.TABLE_NAME)
public class Proveedor {
    public static final String TABLE_NAME = "proveedor";
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long proveedor_id;
    
    @Column(name="proveedor_nombre")
    private String nombre;
    
    @Column(name="proveedor_contacto")
    private String contacto;
}

