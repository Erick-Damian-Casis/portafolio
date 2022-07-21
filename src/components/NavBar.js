import { useState } from "react";

function NavBar(){

    return (
        <nav className="relative sm:block bg-gray-800 py-6 " >
            <div className="container mx-auto flex">
                <div className="flex flex-grow  justify-between" >
                    <div className="text-white">
                        <a href="" className="text-navbar">Inicio</a>
                        <a href="" className="text-navbar">Proyectos</a>
                        <a href="" className="text-navbar">Tecnologias</a>
                        <a href="" className="text-navbar">Contacto</a>
                        <a href="" className="text-navbar">Redes</a>
                    </div>
                    <div className="flex-col">
                        <a href="" className="btn-white">Iniciar sesión</a>
                        <a href="" className="btn-blue">Iniciar sesión</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;