import image from "../image/fondo.jpg"
import photo from "../image/photo.webp"

function Header (){

    return(
        <section className="p-5"  style={{ backgroundImage: `url(${image})` }}>
            <div  className="flex justify-center flex-col">
                <img src={photo} alt="" className="rounded-full h-45 w-45 m-auto"/>
                <p className="text-5xl font-bold text-white leading-normal w-12 m-auto">Erick Damian Developer Full Stack</p>
            </div>
        </section>

    );
}
export default Header;