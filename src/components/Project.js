import {useState} from "react";
import data from "../data/projectDb.json";

function Project(){

    const [projectData]=useState(data);

    console.log(projectData)

    return(
        <div id="project" className="bg-gray-100">
            <h1 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-center text-black border-0 border-gray-200 sm:text-4xl">PROYECTOS</h1>
            {projectData.map(value=>{
                return(
                    <div className="bg-gray-100 py-8 m-auto px-4 leading-7 text-gray-900 bg-white sm:py-2 md:py-4 lg:py-10 ">
                        <div key={value.id} className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
                            <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row p-5  rounded-md shadow-lg shadow-gray-400/50 ">
                                <div className="box-border flex-1 text-center border-solid sm:text-left">
                                    <h2 className="m-0 text-3xl font-semibold leading-tight tracking-tight text-left text-gray-500 border-0 border-gray-200 sm:text-3xl">
                                        {value.title}
                                    </h2>
                                    <p className="mt-2 text-8xl text-left text-gray-900 border-0 border-gray-200 sm:text-sm">
                                        {value.description}
                                    </p>
                                </div>
                                <a href={value.url} className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-gray-800 border border-gray-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                                    Ver repositorio

                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default  Project;