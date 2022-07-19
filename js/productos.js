cargarProductos()

function cargarProductos(){
    fetch("../json/productos.json")
        .then(respuesta => respuesta.json())
        .then(datos => listarProductos(datos))

}

function listarProductos(datos){
    for(dato of datos){
        let {id, descripcion, detalle, precio, imagen} = dato
        
        producto = {id: id, descripcion: descripcion, detalle: detalle, precio: precio, imagen: imagen}
        _productos.push(producto)
        
        catalogo.innerHTML +=   "<article class='producto'>" +
                                    "<img class='imagen-producto' src='../" + imagen + "'alt='Imagen'></img>" +
                                    "<div class='info-producto'>" + 
                                        /* "<input type='submit' id='comprar' onclick='agregarItem(" + id + ")' class='comprar' value='Agregar al carrito'>" + */
                                        "<div class='nombre-producto'>" +
                                            "<h3>" + descripcion + "</h3>" +
                                        "</div>" + 
                                        "<div class='precio-producto'> " + 
                                            "<p class='detalle'>" + detalle +" </p>" +
                                            "<p>$" + precio + "</p>" + 
                                        "</div>" +
                                        "<div class='comprar-producto'>" + 
                                            "<input value='Agregar al carrito' type='submit' id='comprar' onclick='agregarItem(" + id + ")'>" +
                                            /* "<p>" + detalle +" </p>" + */ 
                                        "</div>" +
                                    "</div>" +
                                "</article>"                            
    }
}

function agregarItem(id){
    if(localStorage.getItem("items") != null)
        _items = JSON.parse(localStorage.getItem("items"))
        
    producto = _productos[id - 1]
    item = {producto: producto, cantidad: 0}
    _items.push(item)
    localStorage.setItem("items", JSON.stringify(_items))
 
    mostrarConfirmacion("Producto agregado al carrito")
} 