
function NavBar(){

    return (
        <nav className="relative sm:block bg-gray-800 py-6 " >
            <div className="container mx-auto flex">
                <div className="lg:flex hidden flex-grow justify-between" >
                    <div className="text-white ">
                        <a href="" className="py-2.5 px-5 lg:mr-10 ">Inicio</a>
                        <a href="" className="py-2.5 px-5 lg:mr-10 ">Proyectos</a>
                        <a href="" className="py-2.5 px-5 lg:mr-10 ">Tecnologias</a>
                        <a href="" className="py-2.5 px-5 lg:mr-10 ">Contacto</a>
                        <a href="" className="py-2.5 px-5 lg:mr-10 ">Redes</a>
                    </div>
                    <div className="">
                        <a href="" className="btn-white">Iniciar sesión</a>
                        <a href="" className="btn-blue">Iniciar sesión</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;