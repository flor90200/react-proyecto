import React from "react"
import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <Link to="./assets/logo.jpg" className="logo" />
            <ul className="menu">
                <li><Link to="/" className="menu-link">Inicio</Link></li>
                <li><Link to="/nosotros" className="menu-link">Nosotros</Link></li>
                <li><Link to="/productos" className="menu-link">productos</Link></li>
                <li><Link to="/productos/Extensiones de pestañas" className="menu-link">Extensiones</Link></li>
                <li><Link to="/productos/Lifting de Pestañas" className="menu-link">Lifting</Link></li>
                <li><Link to="/productos/Cejas" className="menu-link">Cejas</Link></li>
                <li><Link to="/productos/Uñas" className="menu-link">Uñas</Link></li>
                <li><Link to="/productos/otros" className="menu-link">Otros</Link></li>
                <li><Link to="/turnos" className="menu-link">Turnos</Link></li>


            </ul>
        </nav>
    )
}

export default Navbar