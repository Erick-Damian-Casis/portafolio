import emailjs from "emailjs-com";
import {useState} from "react";

function Contact(){
    const [formEmail, setFormEmail]=useState({});

    const handleInputChange=(event)=>{
        setFormEmail({
            ...formEmail,
            [event.target.name]: event.target.name
        })
    }

    const sendEmail=(event)=>{
        event.preventDefault()
        emailjs.sendForm('service_0z9mg2q','template_zzfmbym',event.target,'t7zHzqKVm0A2nsGdz').then(res=>{
            alert("El correo se envío correctamente")
        }).catch(error=>{
            console.log(error)
        })
    }

    return(<div>
        <div>
            <div id="contact" className="flex min-h-screen font-vadodara text-white items-center justify-start bg-forest">
                <div className="m-auto w-full max-w-lg flex items-center flex-col">
                    <h1 className="text-4xl font-oleo">Contact me</h1>
                    <p className="mt-3">You can send me an email at ejc.damian@yavirac.edu.ec or send me a message here:</p>
                    <form onSubmit={sendEmail} className="mt-10 w-full">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input type="text" name="name" onChange={handleInputChange} className="peer block w-full appearance-none border-0 border-b botext-white bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-orange-100 peer-focus:dark:text-orange-100">Name</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="email" onChange={handleInputChange} className="peer block w-full appearance-none border-0 border-b botext-white bg-transparent py-2.5 px-0 text-sm text-white focus:border-white focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-orange-100 peer-focus:dark:text-orange-100">Email</label>
                            </div>
                            <div className="relative z-0 col-span-2">
                                <textarea name="message" onChange={handleInputChange} rows="5" className="peer block w-full appearance-none border-0 border-b botext-white bg-transparent py-2.5 px-0 text-sm text-white focus:border-white focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-orange-100 peer-focus:dark:text-orange-100">Message</label>

                            </div>
                        </div>
                        <button type="submit" className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-600 border-solid rounded cursor-pointer md:w-auto lg:mt-5 hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">Send Message</button>
                    </form>
                </div>
            </div>
        </div>

    </div>)
}
export default Contact;
