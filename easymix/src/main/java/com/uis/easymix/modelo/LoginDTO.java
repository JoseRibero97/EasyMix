package com.uis.easymix.modelo;

public class LoginDTO {

    private String email;

    private String contrasena;
    
    public LoginDTO(){
        
    }
    
    public LoginDTO(String email, String contrasena){
        this.contrasena = contrasena;
        this.email = email;
    }
    
    public String getEmail(){
        return email;
    }
    
    public void setEmail(String email){
        this.email = email;
    }
    
    public String getContrasena(){
        return contrasena;
    }
    
    public void setContrasena(String contrasena){
        this.contrasena = contrasena;
    }
}
