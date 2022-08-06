import data from "../data/technologyDb.json"
import {useState} from "react";

function Technology(){

    const [technologyData]=useState(data);

    return(<div id="technology" className="p-16 bg-gray-100">
            <p className="m-0 text-4xl font-semibold leading-tight tracking-tight text-center text-black border-0 border-gray-200 sm:text-4xl">TECNOLOGÍAS</p>
        <div className="p-5 m-auto flex grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {technologyData.map(value=>{
                return(
                    <div key={value.id} className="m-auto mb-10 w-80 h-96 bg-white rounded-2xl shadow-xl shadow-slate-300/60 hover:shadow-lg shadow-gray-800/50 transition duration-500 ease-in-out">
                        <img className="aspect-video m-auto rounded-t-2xl object-cover object-center"
                             alt="" src={value.image}/>
                        <div className="p-4">
                            <small className="text-blue-400 text-xs">{value.language}</small>
                            <h1 className="text-2xl font-medium text-slate-600 pb-2">{value.name}</h1>
                            <p className="text-sm tracking-tight font-light text-slate-400 leading-6">{value.description}</p>
                        </div>
                    </div>
                )
            })}

    </div>
        </div>
    )
}
export default Technology;