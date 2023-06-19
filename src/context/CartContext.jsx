import { createContext, useEffect, useState } from "react";
import Carrito from "../components/Carrito";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem ("carrito")) || [];

export const  CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);

const agregarAlCarrito = (item, cantidad)=>{
    const ItemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto)=>producto.id === ItemAgregado.id);
    
    
    
    if(estaEnElCarrito){
        estaEnElCarrito.cantidad += cantidad;

    } else {
      nuevoCarrito.push(ItemAgregado);
    }
    setCarrito(nuevoCarrito);
   
   }

   const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
   }

   const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
   }

   const vaciarCarrito = () => {
    setCarrito([]);
   }


   useEffect(() =>{
    localStorage.setItem("carrito", JSON.stringify(Carrito))
   }, [carrito])

   return ( <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>
    {children}
   </CartContext.Provider>
) 



}