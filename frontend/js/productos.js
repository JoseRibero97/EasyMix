function loadData(){
    let request = sendRequest('api/producto/list', 'GET', '')
    let table = document.getElementById('producto-table');
    table.innerHTML = "";
    request.onload = function(){
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                    <th>${element.id}</th>
                    <td>${element.idProveedor.nombre}</td>
                    <td>${element.nombre}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.marca}</td>
                    <td>${element.presentacion}</td>
                    <td>${element.cantidad}</td>
                    <td>${element.medida}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location =
                        "form_productos.html?idproducto=${element.id}"'>Ver</button>
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

function saveProducto(){
    let id = document.getElementById('producto-id').value
    let proveedor_id = document.getElementById('proveedor-id').value
    let usuario_id = document.getElementById('usuario-id').value   
    let nombre = document.getElementById('producto-nombre').value
    let descripcion = document.getElementById('producto-descripcion').value
    let marca = document.getElementById('producto-marca').value
    let presentacion = document.getElementById('producto-presentacion').value
    let cantidad = document.getElementById('producto-cantidad').value
    let medida = document.getElementById('producto-medida').value
    let data = {'id': id,'proveedor-id': proveedor_id,'usuario-id': usuario_id,'nombre': nombre,
        'descripcion': descripcion,'marca': marca,'presentacion': presentacion,'cantidad': cantidad, 'medida': medida}
    console.log(data);
    let request = sendRequest('api/producto/', id ? 'PUT' : 'POST', data)
    request.onload = function(){
        alert('Producto creado o actualizado Exitosamente.')
        window.location = 'producto.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}

function loadProducto(idproducto){
    let request = sendRequest('api/producto/list/'+idproducto, 'GET', '')
    let proveedor_id = document.getElementById('proveedor-id')
    let id = document.getElementById('producto-id')
    let usuario_id = document.getElementById('usuario-id')
    let nombre = document.getElementById('producto-nombre')
    let descripcion = document.getElementById('producto-descripcion')
    let marca = document.getElementById('producto-marca')
    let presentacion = document.getElementById('producto-presentacion')
    let cantidad = document.getElementById('producto-cantidad')
    let medida = document.getElementById('producto-medida')
    request.onload = function(){
        let data = request.response;
        //Se actualiza el valor de las variables segun el JSON
        console.log(data);
        id.value = data.id
        proveedor_id.value = data.proveedor_id
        usuario_id.value = data.usuario_id
        nombre.value = data.nombre
        descripcion.value = data.descripcion
        marca.value = data.marca
        presentacion.value = data.presentacion
        cantidad.value = data.cantidad
        medida.value = data.medida
    }
    request.onerror = function(){
        alert("Error al recuperar los datos");
    }
}

function deleteProducto(){
    let id = document.getElementById('producto-id').value
    let request = sendRequest('api/producto/'+ id , 'DELETE', '')
    request.onload = function(){
        alert('Registro Eliminado Exitosamente.')
        window.location = 'producto.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}