import React from "react"

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <a href="./assets/logo.jpg" className="logo" />
            <ul className="menu">
                <li><a href="#" className="menu-link">Inicio</a></li>
                <li><a href="#" className="menu-link">Nosotros</a></li>
                <li><a href="#" className="menu-link">Servicios</a></li>
                <li><a href="#" className="menu-link">Turnos</a></li>

            </ul>
        </nav>
    )
}

export default Navbar