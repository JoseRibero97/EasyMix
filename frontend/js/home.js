    // Abrir el modal al hacer clic en el botón "Ingresar"
    document.querySelector('.ingresar-btn').addEventListener('click', function() {
        document.getElementById('loginModal').style.display = 'flex';
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        if (event.target === document.getElementById('loginModal')) {
            document.getElementById('loginModal').style.display = 'none';
        }
        if (event.target === document.getElementById('regiModal')) {
            document.getElementById('regiModal').style.display = 'none';
        }
    };

    function toggleModals() {
        const loginModal = document.getElementById('loginModal');
        const regiModal = document.getElementById('regiModal');
    
        if (loginModal.style.display === 'flex') {
            loginModal.style.display = 'none';
            regiModal.style.display = 'flex';
        } else {
            regiModal.style.display = 'none';
            loginModal.style.display = 'flex';
        }
    }

    function closeLoginModal() {
        document.getElementById('loginModal').style.display = 'none';
    }