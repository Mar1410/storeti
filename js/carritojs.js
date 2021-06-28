var menuData = [{
   aLinkName: "Inicio",
   aLinkClass: "nav-link active",
   aLinkHref: "#",
   liClass: "nav-item"
},
{
   aLinkName: "Productos",
   aLinkClass: "nav-link",
   aLinkHref: "#",
   liClass: "nav-item"
},
{
   aLinkName: "Preguntas Frecuentes",
   aLinkClass: "nav-link",
   aLinkHref: "#",
   liClass: "nav-item"
},
{
   aLinkName: "Contacto",
   aLinkClass: "nav-link",
   aLinkHref: "#",
   liClass: "nav-item"
},
]

function generadorMenu(data, position) {
let contenedorMenu = document.getElementById(position);
for (let index = 0; index < data.length; index++) {
   let DOMaNode = document.createElement('a');
   DOMaNode.className = data[index].aLinkClass;
   DOMaNode.setAttribute('href', data[index].aLinkHref);
   DOMaNode.innerText = data[index].aLinkName;

   let DOMliNode = document.createElement('li');
   DOMliNode.className = data[index].liClass;
   DOMliNode.appendChild(DOMaNode);
   contenedorMenu.appendChild(DOMliNode);
}
}
generadorMenu(menuData, "mainMenu");

// recuperar los datos del localstorage
function recuperarDatos (){
   
   const carritoTabla = JSON.parse(localStorage.getItem('carrito'));
   console.log(carritoTabla);
   for (let index = 0; index < carritoTabla.length; index++) {
        let id = carritoTabla[index].id;
        let nombre = carritoTabla[index].nombre;
        let precio = carritoTabla[index].precio;
        let cantidad = carritoTabla[index].cantidad;
       constTabla(id, nombre, precio, cantidad);
       console.log(id, nombre, precio, cantidad); 

   
   }
}
recuperarDatos();
//Mostrar Productos en la tabla
function constTabla(id,nombre, precio,cantidad){
   let tablabody = document.getElementById('items');
   let Trbody = document.createElement('tr')
   let Thtablaid = document.createElement('th');
        Thtablaid.setAttribute("scope","row");
        Thtablaid.innerText = id;

   let TdtablaNombre = document.createElement('td');
       TdtablaNombre.innerText = nombre;

   let TdtablaTotal = document.createElement('td');
       TdtablaTotal.innerText='$'
   let spanTablaTotal = document.createElement('span')
       spanTablaTotal.innerText = parseInt(precio)*parseInt(cantidad);
   TdtablaTotal.appendChild(spanTablaTotal);

   let TdtablaCantidad = document.createElement('td');
       TdtablaCantidad.innerText = cantidad;

   let TdAccion = document.createElement('td');
   let BtnMas = document.createElement('button')
       BtnMas.className='btn btn-info btn-sm';
       BtnMas.innerText = '+';
   let BtnMenos = document.createElement('button')
       BtnMenos.className='btn btn-danger btn-sm';
       BtnMenos.innerText = '-';
   TdAccion.appendChild(BtnMenos);
   TdAccion.appendChild(BtnMas);

   Trbody.appendChild(Thtablaid);
   Trbody.appendChild(TdtablaNombre);
   Trbody.appendChild(TdtablaCantidad);
   Trbody.appendChild(TdAccion);
   Trbody.appendChild(TdtablaTotal);
   tablabody.appendChild(Trbody);
}

//funciones aumentar/disminuir
const disminuir = (cantidad) => {
   if (cantidad !== 0) {
       cantidad --
   } 
  return cantidad;
}
const aumentar = (cantidad) => {
    cantidad ++
    return cantidad;
}
//capturar el boton que hace click y pintar la cantidad
const btncatidad = document.querySelectorAll(".btn");
console.log(btncatidad);
btncatidad.forEach((accion) => {

   accion.addEventListener('click', () =>{
       var divCantidad = accion.parentNode;
       var cantidad = parseInt(divCantidad.childNodes[1].textContent) ;
       let pcantidad = divCantidad.childNodes[1];
       
       if (accion.classList.contains("btn-danger")) {
           cantidad = disminuir(cantidad);
           pcantidad.innerText= cantidad;
       } else {
           cantidad = aumentar(cantidad);
           pcantidad.innerText= cantidad;
       }            
   });
});
