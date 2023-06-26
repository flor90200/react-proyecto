
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {  useState } from "react";
import { db } from "../firebase/config";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";




const Contacto = ( )=>{
const[comprador, setComprador]= useState({})
const[orderId, setOrderId] = useState ('')
const [loader, setLoader] = useState(false)
const [mensaje, setMensaje]= useState(false)
const {carrito, precioTotal, vaciarCarrito }= useContext(CartContext)
const navigate = useNavigate()
const datosComprador = (e)=>{
    setComprador({
    ...comprador,
    [e.target.name]:e.target.value
})
}

const finalizarCompra = (e)=>{

    e.preventDefault()
    if(Object.values(comprador).length !== 3){
        setMensaje(true)
      }else{
        
        setMensaje(false)
        setLoader(true)
    const ventas = collection(db, 'orders')
    addDoc(ventas, {
        comprador,
        items: carrito,
        total: precioTotal(),
        date: serverTimestamp()
    
    })
.then((res)=>{
    setOrderId(res.id)
    vaciarCarrito()
})
.catch((error) =>console.log(error))
.finally(() => setLoader (false))
}
}
if(loader){
    return <p>Cargando..</p>
}
return(
    <div className="container">
    {!orderId
    ?<div>
    <h1 className="main-title">Contacto</h1>
    <h4>Por favor complete todos los campos</h4>
    <form className="formulario" onSubmit={finalizarCompra} style={{display: 'flex', justifyContent: 'center',alignItems: 'center', flexDirection: 'column'}}>
        <input type="text" placeholder="Ingresa tu Nombre y Apellido" name="name" onChange={datosComprador}/>
        <input type="email" placeholder="Ingresa tu email" name="email" onChange={datosComprador} />
        <input type="phone" placeholder="Ingresa tu telefono" name="phone" onChange={datosComprador}/>
        <button className="enviar" type="submit">Finalizar compra</button>
        {mensaje && <p style={{color: 'red'}}>Por favor complete todos los campos</p>}
    </form>
    </div>
    :
    <div>
        <h2>Muchas gracias por su compra!</h2>
        <h4>Su orden es: {orderId}</h4>
        <button onClick={() => navigate('/')}>volver</button>
    </div>
    }
</div>
)
}
export default Contacto;