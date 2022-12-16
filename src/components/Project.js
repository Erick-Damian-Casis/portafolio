import {useState} from "react";
import data from "../data/projectDb.json";


export default function Project(){
    const [projectData]=useState(data);

    return(
        <div id="project" className="bg-forest p-20 font-vadodara">
            <h1 className='text-center pb-2 font-oleo text-5xl text-white'>PROJECTS</h1>
            {projectData.map(value=>{
                return(
                    <div key={value.id} className="py-8 m-auto px-4 sm:py-2 md:py-4 lg:py-5 ">
                        <div  className="max-w-6xl px-4 mx-auto lg:px-12">
                            <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row p-5  rounded-md">
                                <div className="box-border flex-1 text-center border-solid sm:text-left">
                                    <h2 className="m-0 text-3xl text-left text-white sm:text-3xl">
                                        {value.title}
                                    </h2>
                                    <p className="mt-2 text-left text-white">
                                        {value.description}
                                    </p>
                                </div>
                                <a href={value.url} className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-gray-800 border border-gray-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                                    View Repository
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
