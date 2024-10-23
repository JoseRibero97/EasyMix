package com.uis.easymix.repositorio;

import com.uis.easymix.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {
    // Método personalizado para buscar
    Optional<Usuario> findByEmail(String email);
}
