import { useState } from "react";

function NavBar(){

    return (
        <div>
            <nav id="header" className="sm:block bg-black py-6 " >
                <div className="container mx-auto">
                    <div className="flex flex-grow  justify-between" >
                        <div className="text-white">
                            <a href="#header" className="text-navbar">Inicio</a>
                            <a href="#technology" className="text-navbar">Tecnologias</a>
                            <a href="#project" className="text-navbar">Proyectos</a>
                            <a href="#contact" className="text-navbar">Contacto</a>
                            <a href="#networks" className="text-navbar">Redes</a>
                        </div>
                    </div>
                </div>
            </nav>
            <a href="#header">
                <svg xmlns="http://www.w3.org/2000/svg" className="fixed h-12 w-12 bottom-0 right-0 m-6 hover:text-gray-500" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/>
                </svg>
            </a>
        </div>
    );
}
export default NavBar;