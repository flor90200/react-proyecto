import React from "react";

const Item = (producto) =>{
    return (
   
   <div className="producto">
       <img src={producto.img}/>
        <div>
        <h4>{producto.titulo}</h4>
        <p> Precio: ${producto.precio}</p>
        <p> Categoria: {producto.categoria}</p>
        <p>{producto.descripcion}</p>
        <a className="ver-mas" href={`/item/${producto.id}`}>ver-mas</a>
    </div>
    </div>
    )
}

export default Item


