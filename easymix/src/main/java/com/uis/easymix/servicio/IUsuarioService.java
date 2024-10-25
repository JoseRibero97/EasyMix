package com.uis.easymix.servicio;

import com.uis.easymix.modelo.LoginDTO;
import com.uis.easymix.modelo.Usuario;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IUsuarioService {
    List<Usuario> getUsuario();

    Usuario guardarUsuario(Usuario usuario);

    Usuario buscarUsuario(Long id);

    int borrarUsuario(Long id);

    int login(LoginDTO usuarioDTO);

    ResponseEntity<?> ingresar (LoginDTO usuarioDTO);
}
