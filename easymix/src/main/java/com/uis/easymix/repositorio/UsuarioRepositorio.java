package com.uis.easymix.repositorio;

import com.uis.easymix.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {
    @Query("select count(*) from Usuario as p where p.email =:email and p.contrasena =:contrasena")
    Integer buscarCorreoElectronicoYContrasena(@Param("email") String email,
                                           @Param("contrasena") String contrasena);

    @Query("select p from Usuario as p where p.email =:email and p.contrasena =:contrasena")
    Usuario buscarCorreoYContrasena(@Param("email") String email,
                                    @Param("contrasena") String contrasena);
}
