package com.uis.easymix.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = Producto.TABLE_NAME)
public class Producto {
    public static final String TABLE_NAME = "producto";
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "proveedor_id")
    private Proveedor idProveedor;
    
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario idUsuario;
    
    @NotNull
    @NotBlank(message = "El nombre es obligatorio")
    @Size(min = 3, message = "El nombre debe ser mayor a 3 caracteres")
    @Column(name="nombre")
    private String nombre;
    
    @NotNull
    @Column(name="descripcion")
    private String descripcion;
    
    @NotNull
    @NotBlank(message = "La marca es obligatoria")
    @Size(min = 3, message = "La marca debe tener minimo 3 caracteres")
    @Column(name="marca")
    private String marca;
    
    @NotNull
    @NotBlank(message = "La presentacion es obligatoria")
    @Size(min = 3, message = "La presentacion debe tener minimo 3 caracteres")
    @Column(name="presentacion")
    private String presentacion;
    
    @NotNull
    @NotBlank(message = "La cantidad es obligatoria")
    @Column(name="cantidad")
    private int cantidad;
    
    public Producto() {
        
    }
    
    public Producto(Long id, Proveedor idProveedor, Usuario idUsuario,
            String nombre, String descripcion, String marca, 
            String presentacion, int cantidad) {
        this.id = id;
        this.idProveedor = idProveedor;
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.marca = marca;
        this.presentacion = presentacion;
        this.cantidad = cantidad;
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public Proveedor getIdProveedor() {
        return idProveedor;
    }
    
    public void setIdProveedor(Proveedor idProveedor) {
        this.idProveedor = idProveedor;
    }
    
    public Usuario getIdUsuario() {
        return idUsuario;
    }
    
    public void setIdUsuario(Usuario idUsuario) {
        this.idUsuario = idUsuario;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public String getDescripcion() {
        return descripcion;
    }
    
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    public String getMarca() {
        return marca;
    }
    
    public void setMarca(String marca) {
        this.marca = marca;
    }
    
    public String getPresentacion() {
        return presentacion;
    }
    
    public void setPresentacion(String presentacion) {
        this.presentacion = presentacion;
    }
    
    public int getCantidad() {
        return cantidad;
    }
    
    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
    
}
