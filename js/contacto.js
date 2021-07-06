document.getElementById('error2').style.display = 'none';

function isValidCorreo(correo) {
    if (correo.length > 0) {
        return true;
    }
    return false;
}

function isValidMensaje(mensaje) {
    console.log(mensaje.length);
    if (mensaje.length > 0) {
        return true;
    }
    return false;
}


//enviar contacto
var enviar = document.getElementById('enviar');
//let hayerror = 'NO'
enviar.addEventListener('click', function(e) {
    e.preventDefault();
    error2.style.display = 'none'
    let correo = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensaje').value;


    
    if (isValidCorreo(correo) && isValidMensaje(mensaje)) 
    {
          error2.style.display = 'none';   
          //  mandon a la console
    }
    else 
    { 
          error2.style.display = 'block';
    }
    // return;
    



});