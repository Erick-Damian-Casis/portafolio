import me from '../image/me.jpg'
export default function About(){

    return(
        <div className='bg-forest relative top-12 p-20  text-white'>
            <h1 className='text-center pb-4 font-oleo text-5xl'>About Me</h1>
            <div className='w-full flex font-vadodara text-2xl grid lg:grid-cols-2 sm:grid-cols-1 text-center'>
                <div className='w-auto p-6'>
                    <p >Hello, my name is Erick, I am from Ecuador, I am a person with clear goals, I am always interested in learning new things and not stagnating with my knowledge, taking on new challenges that force me to improve in what I like </p>
                    <a href='#contact' className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-gray-800 border border-gray-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                        Contact
                    </a>
                </div>
                <div className='w-full p-6 rounded-md'>
                    <img src={me} alt=""/>
                </div>
            </div>
        </div>
    )
}
