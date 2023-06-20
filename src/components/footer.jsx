import React from "react";
import "../style.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="main-title ">Para turnos y consultas no dudes en dejarnos tu mensajito ❤</h4>
                        <ul className="list-unstyled">
                            <li>Numero: 1134337195</li>
                            <li>Email: flor90200@gmail.com</li>
                            <li>instagram: @Flower.Style</li>
                            <li>Facebook: Flower Style</li>
                        </ul>
                        <div className="col">
                            <h4 className="main-title">Sobre nosotros</h4>
                            <ul className="list-unstyled">
                                <li>nos encontramos en Tigre, zona norte</li>
                                <li>para reservar nuestros servicios debera abonar el 50% de lo que desea realizarse</li>
                                <li> Asistir sin acompañantes, ni maquillaje</li>
                                <li>Tolerancia de los turnos es de 15 min, pasado ese tiempo se cancela el turno</li>
                                <li>La seña se reembolsa unicamente con 36hs de anticipacion</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;