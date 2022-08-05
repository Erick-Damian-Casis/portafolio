import {useState} from "react";

function Project(){


    return(
        <div>
            <section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
                <div className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
                    <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
                        <div className="box-border flex-1 text-center border-solid sm:text-left">
                            <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                                Boost Your Productivity
                            </h2>
                            <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                                Our service will help you maximize and boost your productivity.
                            </p>
                        </div>
                        <a href="#_" className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-indigo-600 border border-indigo-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                            Get Started

                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default  Project;