
function validarLogin(){
    var userEmail = document.getElementById('useremail').value;
    var userPass = document.getElementById('userpass').value;
    let data = {'email':userEmail, 'contrasena':userPass};
    console.log(data)
    let request = sendRequest('api/usuario/loginUsuario', 'POST', data);
    let request2 = sendRequest('api/usuario/login', 'POST', data);
    console.log(request.response)

    request.onload = function(){
        data1= request.response;
        const loginMessage = document.getElementById('loginMessage'); // Obtener el elemento del mensaje
        loginMessage.style.color = '';

        if(data1 == 1){
            loginMessage.textContent = "Login Correcto"; 
            loginMessage.style.color = 'green'; 

            const rightNav = document.querySelector('.right-nav');
            console.log(request2.response.Usuario.nombre)
            rightNav.innerHTML = `
                <span class="user-text">${request2.response.Usuario.nombre}</span>
                <img src="../img/usuario.png" alt="Usuario" class="user-icon">
            `;
            document.getElementById('loginModal').style.display = 'none';
        }else{
            loginMessage.textContent = "¡Contraseña o Email incorrectos!"; 
            loginMessage.style.color = 'red';
        }
    }
    request.onerror = function(){
        const loginMessage = document.getElementById('loginMessage');
        loginMessage.textContent = "Usuario no registrado."; 
        loginMessage.style.color = 'red'; 
    }
}