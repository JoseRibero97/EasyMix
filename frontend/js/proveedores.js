function loadData(){
    let request = sendRequest('api/proveedor/registros', 'GET', '')
    let table = document.getElementById('proveedor-table');
    table.innerHTML = "";
    request.onload = function(){
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                    <th>${element.id}</th>
                    <td>${element.nombre}</td>
                    <td>${element.contacto}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location =
                        "form_proveedores.html?idproveedor=${element.id}"'>Ver</button>
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

function saveProveedor(){
    let id = document.getElementById('proveedor-id').value
    let nombre = document.getElementById('proveedor-nombre').value
    let contacto = document.getElementById('proveedor-contacto').value
    let data = {'id': id,'nombre': nombre,'contacto': contacto}
    console.log(data);
    let request = sendRequest('api/proveedor/', id ? 'PUT' : 'POST', data)
    request.onload = function(){
        alert('Proveedor creado o actualizado Exitosamente.')
        window.location = 'proveedor.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}

function loadProveedor(idproveedor){
    let request = sendRequest('api/proveedor/registros/'+idproveedor, 'GET', '')
    let id = document.getElementById('proveedor-id')
    let nombre = document.getElementById('proveedor-nombre')
    let contacto = document.getElementById('proveedor-contacto')
    request.onload = function(){
        let data = request.response;
        //Se actualiza el valor de las variables segun el JSON
        console.log(data);
        id.value = data.id
        nombre.value = data.nombre
        contacto.value = data.contacto
    }
    request.onerror = function(){
        alert("Error al recuperar los datos");
    }
}

function deleteProveedor(){
    let id = document.getElementById('proveedor-id').value
    let request = sendRequest('api/proveedor/'+ id , 'DELETE', '')
    request.onload = function(){
        alert('Registro Eliminado Exitosamente.')
        window.location = 'proveedor.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}