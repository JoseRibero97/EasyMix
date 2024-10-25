function saveUsuario() {
    let id = document.getElementById('usuario-id').value;
    let nombre = document.getElementById('usuario-nombre').value;
    let email = document.getElementById('usuario-email').value;

    let data = { 'id': id, 'nombre': nombre, 'email': email };
    let request = sendRequest('api/usuario/', id ? 'PUT' : 'POST', data);
    request.onload = function() {
        alert('Usuario creado o actualizado exitosamente.');
        window.location = 'usuario.html';
    };
    request.onerror = function() {
        alert('Error al guardar los cambios.');
    };
}

function loadUsuario(idusuario) {
    let request = sendRequest('api/usuario/list/' + idusuario, 'GET', '');
    request.onload = function() {
        let data = request.response;
        document.getElementById('usuario-id').value = data.id;
        document.getElementById('usuario-nombre').value = data.nombre;
        document.getElementById('usuario-email').value = data.email;
    };
    request.onerror = function() {
        alert("Error al recuperar los datos.");
    };
}

function deleteUsuario() {
    let id = document.getElementById('usuario-id').value;
    let request = sendRequest('api/usuario/' + id, 'DELETE', '');
    request.onload = function() {
        alert('Registro eliminado exitosamente.');
        window.location = 'usuario.html';
    };
    request.onerror = function() {
        alert('Error al eliminar el registro.');
    };
}
