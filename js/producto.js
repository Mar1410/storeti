var ofertaChk = document.getElementById('oferta');
var discountContainer = document.getElementById('descuentoContainer');
discountContainer.style.display = 'none';
document.getElementById('error').style.display = 'none';
ofertaChk.addEventListener('click', function(e) {
    if (ofertaChk.checked) {
        document.getElementById('descuentoContainer').style.display = 'block';
    } else {
        document.getElementById('descuentoContainer').style.display = 'none';
    }
});

function isValidNombre(nombre) {
    if (nombre.length > 4) {
        return true;
    }
    return false;
}

function isValidDescripcion(descripcion) {
    if (descripcion.length < 151) {
        return true;
    }
    return false;
}

function isValidPrecio(precio) {
    if (Number.isNaN(parseFloat(precio)) || precio === "") {
        return false
    }
    return true;
}

function generarTexto(cantidad) {
    let texto = ""
    for (let index = 0; index < cantidad; index++) {
        texto += 'a';
    }
    return texto
}


//insertar producto
var insertar = document.getElementById('insertar');
insertar.addEventListener('click', function(e) {
    e.preventDefault();
    let error = document.getElementById('error');
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').textContent;
    let oferta = document.getElementById('oferta').checked;
    let precio = document.getElementById('precio').value;

    if (!isValidNombre(nombre)) {
        error.style.display = 'block';
        return;
    }
    if (!isValidDescripcion(descripcion)) {
        error.style.display = 'block';
        return;
    }
    if (!isValidPrecio(precio)) {
        error.style.display = 'block';
        return;
    }

});

/*
nombre de producto mayor de 5 caracteres
descripcion menor o igual que 150 caracteres
precio debe ser un numero decimal valido y mayor que 0
si la oferta esta seleccionada el descuento es obligatorio y ademas un un numero valido mayor que cero
*/