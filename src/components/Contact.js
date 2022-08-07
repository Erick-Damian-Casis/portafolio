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
            <div id="contact" className="flex min-h-screen items-center justify-start bg-white">
                <div className="mx-auto w-full max-w-lg">
                    <h1 className="text-4xl font-medium">Contáctanos</h1>
                    <p className="mt-3">Puedes enviarme un correo a ejc.damian@yavirac.edu.ec o enviarme un mensaje por aqui:</p>
                    <form onSubmit={sendEmail} className="mt-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input type="text" name="name" onChange={handleInputChange} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Nombre</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="email" onChange={handleInputChange} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Correo</label>
                            </div>
                            <div className="relative z-0 col-span-2">
                                <textarea name="message" onChange={handleInputChange} rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Mensaje</label>

                            </div>
                        </div>
                        <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white">Enviar mensaje</button>
                    </form>
                </div>
            </div>
        </div>

    </div>)
}
export default Contact;