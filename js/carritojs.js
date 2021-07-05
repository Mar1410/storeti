var menuData = [{
   aLinkName: "Inicio",
   aLinkClass: "nav-link active",
   aLinkHref: "./index.html",
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

   let tbody= document.getElementById("items");
   tbody.innerHTML = "";
   let tFooter= document.getElementById("Tfooter");
   tFooter.innerHTML = "";

   const carritoTabla = JSON.parse(localStorage.getItem('carrito'));
   if (carritoTabla !== null) {
      for (let index = 0; index < carritoTabla.length; index++) {
            const id = carritoTabla[index].id;
            const nombre = carritoTabla[index].nombre;
            const precio = carritoTabla[index].precio;
            let cantidad = carritoTabla[index].cantidad;
            constTabla(id, nombre, precio, cantidad);
      }
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
   let BtnMas = document.createElement('a')
       BtnMas.className='btn btn-info btn-sm';
       BtnMas.innerText = '+';
   let BtnMenos = document.createElement('a')
       BtnMenos.className='btn btn-danger btn-sm';
       BtnMenos.innerText = '-';
    let TdtablaEliminar= document.createElement('td');
    let BtnEliminar = document.createElement('a')
       BtnEliminar.className='btn btn-dark btn-sm';
       BtnEliminar.innerText = 'X';
    TdtablaEliminar.appendChild(BtnEliminar);

   TdAccion.appendChild(BtnMenos);
   TdAccion.appendChild(BtnMas);

   Trbody.appendChild(Thtablaid);
   Trbody.appendChild(TdtablaNombre);
   Trbody.appendChild(TdtablaCantidad);
   Trbody.appendChild(TdAccion);
   Trbody.appendChild(TdtablaTotal);
   Trbody.appendChild(TdtablaEliminar);
   tablabody.appendChild(Trbody);

}
//construir footer de la tabla
function construirTfooter(){
   let tbody= document.getElementById("items");
   let tFooter= document.getElementById("Tfooter");

   if (tbody.childNodes.length!== 0) {
   //capturar botones
   var btncatidad = document.querySelectorAll(".btn");
   capturarBtn(btncatidad);

      let trFooter = document.createElement('tr');
      let TdVaciarC = document.createElement('td');
          TdVaciarC.setAttribute("colspan","3");
      let BtnVaciarC = document.createElement('button');
          BtnVaciarC.setAttribute("id", "btnVaciarC")
          BtnVaciarC.className='btn btn-primary';
          BtnVaciarC.innerText = 'Vaciar Carrito';
      TdVaciarC.appendChild(BtnVaciarC);

      let TdTotalP = document.createElement('td');
          TdTotalP.setAttribute("colspan","3");
      let PtdtotalP = document.createElement('p');
          PtdtotalP.innerText = 'Total a pagar: $';
          PtdtotalP.style.fontWeight = "bolder";
      let SpantdtotalP = document.createElement('span');
          SpantdtotalP.style.fontWeight = "bolder";
          SpantdtotalP.innerText= "0";

      PtdtotalP.appendChild(SpantdtotalP);
      TdTotalP.appendChild(PtdtotalP);
      trFooter.appendChild(TdVaciarC);
      trFooter.appendChild(TdTotalP);
      tFooter.appendChild(trFooter);
      totalApagar();
      //Eliminar carrito del localstorage
      if (localStorage.getItem('carrito') !== null) {
         BtnVaciarC = document.getElementById("btnVaciarC");
         BtnVaciarC.addEventListener('click', ()=> {
            localStorage.clear();
            recuperarDatos ();
            construirTfooter();
         })
      }
   }else{
      let trFooter = document.createElement('tr');
      let TdFooter = document.createElement('td');
          TdFooter.setAttribute("colspan","6");
      let PtdFooter = document.createElement('p');
          PtdFooter.innerText = '¡Su carrito esta Vacio! - Comience a comprar';
          PtdFooter.style.textAlignLast = "center";
          PtdFooter.style.fontWeight = "bolder";
      let AtdFooter = document.createElement('a');
          AtdFooter.innerText = ' AQUI'
          AtdFooter.setAttribute("href", "./index.html")

      PtdFooter.appendChild(AtdFooter);
      TdFooter.appendChild(PtdFooter);
      trFooter.appendChild(TdFooter);
      tFooter.appendChild(trFooter);
   }   
}
construirTfooter();
//funcion Total a pagar 
function totalApagar(){

   tbody = document.getElementById("items").childNodes;
   let tFooter = document.getElementById("Tfooter").childNodes;
   let acumulador = 0;
   for (let index = 0; index < tbody.length; index++) {
       acumulador = acumulador + parseInt(tbody[index].childNodes[4].childNodes[1].textContent);
   }
   let span = tFooter[0].querySelectorAll("span");
   span[0].innerText = acumulador;

}
//funciones aumentar/disminuir
const disminuir = (cantidad) => {
   if (cantidad !== 1) {
       cantidad --
   } 
   return cantidad;
}
const aumentar = (cantidad) => {
    cantidad ++
    return cantidad;
}
//Eliminar producto del carrito
function eliminarPcaarito (id){

   const carritoTabla = JSON.parse(localStorage.getItem('carrito'));
   for (let index = 0; index < carritoTabla.length; index++) {
      if (carritoTabla[index].id === id) {
         carritoTabla.splice(index, 1 );
         localStorage.setItem('carrito', JSON.stringify(carritoTabla));

         recuperarDatos();
         construirTfooter();
      }
  }
}
// Funcion modificar cantidad del producto almacenado dentro del localstorage
function editarCanProducto(id, cantidad){

   const carritoTabla = JSON.parse(localStorage.getItem('carrito'));
   for (let index = 0; index < carritoTabla.length; index++) {
      if (carritoTabla[index].id === id) {
         carritoTabla[index].cantidad = cantidad;
      }
   }
   localStorage.setItem('carrito', JSON.stringify(carritoTabla));
}
//capturar el boton que hace click y pintar la cantidad
function capturarBtn(btncatidad){
   btncatidad.forEach((accion) => {

      accion.addEventListener('click', () =>{
          if (accion !==undefined) {

            let trTabla =  accion.parentNode.parentNode
            let cantidad = parseInt(trTabla.childNodes[2].textContent);
            let id = trTabla.childNodes[0].textContent;
          //Preguntar al profe sino habia otra forma de hacerlo
            let precio =  parseInt(trTabla.childNodes[4].childNodes[1].textContent) / parseInt(trTabla.childNodes[2].textContent);
            let pcantidad = trTabla.childNodes[2];
          
            if (accion.classList.contains("btn-danger")) {
                 cantidad = disminuir(cantidad);
                 pcantidad.innerText= cantidad;
                 //Preguntar al profe tambien
                 trTabla.childNodes[4].childNodes[1].innerText = parseInt(precio)*parseInt(cantidad);
                 totalApagar()
                 editarCanProducto(id, cantidad);
            } else if (accion.classList.contains("btn-info")) {
                 cantidad = aumentar(cantidad);
                 pcantidad.innerText= cantidad;
                 trTabla.childNodes[4].childNodes[1].innerText = parseInt(precio)*parseInt(cantidad);
                 totalApagar();
                 editarCanProducto(id, cantidad);
            } else if (accion.classList.contains("btn-dark")) {
                  eliminarPcaarito(trTabla.firstChild.textContent, trTabla);
            }     
         }  
      });
   });
}

