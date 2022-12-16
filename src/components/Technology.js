import {useState} from "react";
import data from "../data/technologyDb.json"
export default function Technology(){

    const [technologyData] = useState(data);

    return(
        <div id='technology' className="bg-forest p-20">
            <h1 className='text-center pb-4 font-oleo text-5xl text-white'>Technologies</h1>
            <div className="p-2 flex grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {technologyData.map(value=>{
                    return(
                        <div key={value.id} className="m-auto w-72 p-8 hover:transition duration-500 ease-in-out">
                            <img className="m-auto w-3/5 transform transition duration-200 hover:scale-125"
                                 alt="" src={value.image}/>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
