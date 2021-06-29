var menuData = [{
        aLinkName: "Inicio",
        aLinkClass: "nav-link active",
        aLinkHref: "../index.html",
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
    {
        aLinkName: "Gestionar producto",
        aLinkClass: "nav-link",
        aLinkHref: "forms/producto.html",
        liClass: "nav-item"
    }
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