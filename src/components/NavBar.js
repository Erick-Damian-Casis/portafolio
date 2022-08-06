import { useState } from "react";

function NavBar(){

    return (
        <div>
            <nav className="sm:block bg-black py-6 " >
                <div className="container mx-auto">
                    <div className="flex flex-grow  justify-between" >
                        <div className="text-white">
                            <a href="" className="text-navbar">Inicio</a>
                            <a href="#technology" className="text-navbar">Tecnologias</a>
                            <a href="#project" className="text-navbar">Proyectos</a>
                            <a href="#contact" className="text-navbar">Contacto</a>
                            <a href="#networks" className="text-navbar">Redes</a>
                        </div>
                        <div className="flex-col">
                            <a href="" className="btn-white">Iniciar sesión</a>
                            <a href="" className="btn-blue">Iniciar sesión</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;