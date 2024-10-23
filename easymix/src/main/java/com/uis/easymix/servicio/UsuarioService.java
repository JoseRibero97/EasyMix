package com.uis.easymix.servicio;

import com.uis.easymix.modelo.Usuario;
import com.uis.easymix.repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    public List<Usuario> findAll() {
        return usuarioRepositorio.findAll();
    }

    public Optional<Usuario> findById(Long id) {
        return usuarioRepositorio.findById(id);
    }

    public Usuario save(Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }

    public void deleteById(Long id) {
        usuarioRepositorio.deleteById(id);
    }
}
