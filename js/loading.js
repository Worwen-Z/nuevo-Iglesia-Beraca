document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const ingresarButton = document.getElementById('ingresar-button');
    
    ingresarButton.addEventListener('click', () => {
    loadingScreen.classList.add('hidden');
    document.body.classList.remove('loading'); // Restablece el scroll
    });
    });


/* CODIGO PARA HACER QUE PANTALLA DE CARGA "loading-screen" se muestre y al clickear en ingresar se desvanezca la pantalla de carga */