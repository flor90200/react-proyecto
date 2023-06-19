import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect } from "react";

const Nosotros = () =>{

    useEffect(()=>{
        const clickear= ()=>{
            console.log("click");
        }

       window.addEventListener("click", clickear)
    
    return()=>{
        window.removeEventListener("click", clickear)
        }
    
    }, [] )
    
    return(
        <div className="container">
            <h1 className="main-title">hola</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium dicta quibusdam a animi, laboriosam doloribus dignissimos rerum molestiae aliquid libero, nemo, suscipit obcaecati commodi maxime totam ducimus! Eligendi, quae.</p>
        </div>
    )
}

export default Nosotros