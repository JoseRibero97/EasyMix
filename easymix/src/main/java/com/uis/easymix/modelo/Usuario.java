package com.uis.easymix.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = Usuario.TABLE_NAME)
public class Usuario {
    public static final String TABLE_NAME = "Usuario";
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
