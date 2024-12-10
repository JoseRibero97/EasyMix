package com.uis.easymix.servicio;

import com.uis.easymix.modelo.LoginDTO;
import com.uis.easymix.modelo.Usuario;
import com.uis.easymix.repositorio.UsuarioRepositorio;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class UsuarioService implements IUsuarioService {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Override
    public List<Usuario> getUsuario() {
        return usuarioRepositorio.findAll();
    }

    @Override
    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }

    @Override
    public Usuario buscarUsuario(Long id) {
        return usuarioRepositorio.findById(id).orElse(null);
    }

    @Override
    public int borrarUsuario(Long id) {
        usuarioRepositorio.deleteById(id);
        return 1;
    }

    @Override
    public int login(LoginDTO usuarioDTO) {
        int u = usuarioRepositorio.buscarCorreoElectronicoYContrasena(usuarioDTO.getEmail(), usuarioDTO.getContrasena());
        return u;
    }

    @Override
    public ResponseEntity<?> ingresar(LoginDTO usuarioDTO) {
        Map<String, Object> response = new HashMap<>();
        Usuario usuario = null;
        try{
            System.out.println("Datos recibidos: " + usuarioDTO.getEmail() + ", " + usuarioDTO.getContrasena());
            usuario = usuarioRepositorio.buscarCorreoYContrasena(usuarioDTO.getEmail(), usuarioDTO.getContrasena());
            if(usuario == null){
                response.put("Usuario", null);
                response.put("mensaje","Alerta: Usuario o nombre incorrectos" );
                response.put("statusCode", HttpStatus.NOT_FOUND.value());
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }else{
                response.put("Usuario", usuario);
                response.put("mensaje", "Datos Correctos");
                response.put("statusCode", HttpStatus.OK.value());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
        } catch(Exception e){
            response.put("Usuario", null);
            response.put("mensaje", "Ha osurrido un error");
            response.put("statusCode", HttpStatus.INTERNAL_SERVER_ERROR.value());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
