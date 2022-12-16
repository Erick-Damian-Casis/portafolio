import layer0 from '../image/scroll/layer_0.png'
import layer1 from '../image/scroll/layer_1.png'
import layer2 from '../image/scroll/layer_2.png'
import layer3 from '../image/scroll/layer_3.png'
import layer4 from '../image/scroll/layer_4.png'
import layer5 from '../image/scroll/layer_5.png'
import layer6 from '../image/scroll/layer_6.png'
import {useEffect} from "react";

export default function Header(){
    useEffect(()=>{
        scrolling();
    },[])

    const scrolling=()=>{
        let cloud= document.getElementById('cloud')
        let mountain1= document.getElementById('mountain1')
        let mountain2= document.getElementById('mountain2')
        let mountain3= document.getElementById('mountain3')
        let mountain4= document.getElementById('mountain4')
        let tower= document.getElementById('tower')
        window.addEventListener('scroll',function (){
            let value = window.scrollY;
            cloud.style.top = value * 0.90 +'px';
            mountain1.style.top = value * 0.75 +'px';
            mountain2.style.top = value * 0.80 +'px';
            mountain3.style.top = value * 0.70 +'px';
            mountain4.style.top = value * 0.60 +'px';
            tower.style.top = value * 0.40 +'px';
        })
    }


    return(
        <section id='header' className='bg-orange-100 relative w-full top-60 flex justify-center items-center overflow-hidden min-h-screen'>
            <h1 className='font-titan relative text-5xl w-auto h-[70vh] mt-32 pointer-events-none'>FULL STACK DEVELOPER</h1>
            <img src={layer0} id='cloud' className='absolute bottom-0 left-0 w-screen h-screen object-cover pointer-events-none' alt=""/>
            <img src={layer1} id='mountain1' className='absolute bottom-0 top-0 left-0 right-0 w-screen h-[70vh] object-cover pointer-events-none' alt=""/>
            <img src={layer2} id='mountain2' className='absolute bottom-0 top-0 left-0 right-0 w-screen h-[70vh] object-cover pointer-events-none' alt=""/>
            <img src={layer3} id='mountain3' className='absolute bottom-0 top-0 left-0 right-0 w-screen h-[70vh] object-cover pointer-events-none' alt=""/>
            <img src={layer4} id='mountain4' className='absolute bottom-0 top-0 left-0 right-0 w-screen h-[70vh] object-cover pointer-events-none' alt=""/>
            <img src={layer5} id='tower'     className='absolute bottom-0 top-0 left-0 right-0 w-screen h-[70vh] object-cover pointer-events-none' alt=""/>
            <img src={layer6} id='mountain5' className='absolute bottom-0 top-0 left-0 right-0 w-screen h-[70vh] object-cover pointer-events-none' alt=""/>
        </section>
    )
}
