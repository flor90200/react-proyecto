import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const Carrito = ()=>{

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);


    const handleVaciar = () => {
        vaciarCarrito();
    }

    const mostrarAlerta=()=>{
        Swal.fire({
            title: "Gracias por su compra 😍",
            icon: "success",
            button: "Aceptar",
            background:"#E8A2E2",  confirmButtonText: 'Continuar',
            confirmButtonColor: 'rgb(229, 112, 221)',
             showClass: {
               popup: 'animate__animated animate__flipInY'
             },
             hideClass: {
               popup: 'animate__animated animate__flipOutY'
             }
           })
        
    }
    return(
        <div className="container">
            <h1 className="main-title">carrito</h1>

                {
                    carrito.map((prod) => (
                       <div key={prod.id}>
                        <br />
                        <h3>{prod.titulo}</h3>
                        <p>Precio unit: ${prod.precio * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <br />
                       </div>
                    ))
                }   
               {
               carrito.length > 0 ?
               <>
                <h2>Precio total: ${precioTotal()} </h2>  
                <button className="btn" onClick={mostrarAlerta}>Pagar</button>
                </>:
                <h2>El carrito esta vacio 😢 </h2>
                }
        </div>
    )
}

export default Carrito;