package com.uis.easymix.controlador;

import com.uis.easymix.modelo.LoginDTO;
import com.uis.easymix.modelo.Usuario;
import com.uis.easymix.servicio.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/registros")
    public List<Usuario> getAllUsuarios() {
        return usuarioService.getUsuario();
    }

    @GetMapping("/registros/{id}")
    public Usuario getUsuarioById(@PathVariable Long id) {
        return usuarioService.buscarUsuario(id);
    }

    @PostMapping("/")
    public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario usuario) {
        return new ResponseEntity<>(usuarioService.guardarUsuario(usuario), HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<Usuario> updateUsuario(@RequestBody Usuario usuarioDetails) {
        Usuario obj = usuarioService.buscarUsuario(usuarioDetails.getId());
        if(obj != null){
            obj.setNombre(usuarioDetails.getNombre());
            obj.setEmail(usuarioDetails.getEmail());
            obj.setContrasena(usuarioDetails.getContrasena());
            usuarioService.guardarUsuario(obj);
            return new ResponseEntity<>(obj, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Usuario> deleteUsuario(@PathVariable Long id) {
        Usuario usuario = usuarioService.buscarUsuario(id);
        if (usuario != null) {
            usuarioService.borrarUsuario(id);
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/loginUsuario")
    public int login(@RequestBody LoginDTO usuario){
        int responseLogin = usuarioService.login(usuario);
        return responseLogin;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginCliente(@RequestBody LoginDTO usuario){
        return usuarioService.ingresar(usuario);
    }
}
