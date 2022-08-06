import image from "../image/fondo.jpg"
import photo from "../image/photo.webp"

function Header (){

    return(
        <section className="flex justify-center m-auto drop-shadow-2xl pb-0.5"  style={{ backgroundImage: `url(${image})` }}>
            <div  className="shadow-pink-600">
               <div>
                   <img src={photo} alt="" className="rounded-full h-45 w-45 m-auto p-10"/>
               </div>
                <h1 className="text-6xl mb-1 tracking-tight font-normal text-center text-white leading-normal ">ERICK DAMIAN</h1>
                <p className="text-4xl mb-8  font-normal text-center text-white leading-normal">Developer Full Stack</p>
            </div>
        </section>

    );
}
export default Header;