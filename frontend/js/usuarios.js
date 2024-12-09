function loadData(){
    let request = sendRequest('api/usuario/registros', 'GET', '')
    let table = document.getElementById('usuario-table');
    table.innerHTML = "";
    request.onload = function(){
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                    <th>${element.id}</th>
                    <td>${element.nombre}</td>
                    <td>${element.email}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location =
                        "form_usuarios.html?idusuario=${element.id}"'>Ver</button>
                    </td>
                </tr>

                `
        });
    }
    request.onerror = function(){
        table.innerHTML = `
            <tr>
                <td colspan="9">Error al recuperar los datos.</td>
            </tr>
        `;
    }
}

function saveUsuario() {
    let id = document.getElementById('usuario-id').value
    let nombre = document.getElementById('usuario-nombre').value
    let email = document.getElementById('usuario-email').value
    let contrasena = document.getElementById('usuario-contrasena').value
    let data = { 'id': id, 'nombre': nombre, 'email': email, 'contrasena': contrasena }
    let request = sendRequest('api/usuario/', id ? 'PUT' : 'POST', data)
    request.onload = function() {
        alert('Usuario creado o actualizado exitosamente.')
        window.location = 'usuario.html';
    }
    request.onerror = function() {
        alert('Error al guardar los cambios.');
    }
}

function loadUsuario(idusuario) {
    let request = sendRequest('api/usuario/registros/'+idusuario, 'GET', '')
    let nombre = document.getElementById('usuario-nombre')
    let email = document.getElementById('usuario-email')
    let id = document.getElementById('usuario-id')
    let contrasena = document.getElementById('usuario-contrasena')
    request.onload = function() {
        let data = request.response;
        console.log(data);
        id.value = data.id
        email.value = data.email
        nombre.value = data.nombre
        contrasena.value = data.contrasena
    }
    request.onerror = function() {
        alert("Error al recuperar los datos.");
    }
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
