import logo from '../image/logo.png'

import { BsFillFileArrowDownFill } from "react-icons/bs";

function NavBar(){

    return (
        <div id='nav' className='h-20 w-full px-28 flex justify-between items-center font-vadodara font-bold block z-40'>
            <img src={logo} className='w-20' alt=""/>
            <ul className='flex w-auto justify-center items-center'>
                <li className='list-none ml-16'><a href="#header" className='hover:bg-forest hover:text-white px-1.5 px-4 rounded-full'>Home</a></li>
                <li className='list-none ml-16'><a href="#technology" className='hover:bg-forest hover:text-white px-1.5 px-4 rounded-full'>Technology</a></li>
                <li className='list-none ml-16'><a href="#project" className='hover:bg-forest hover:text-white px-1.5 px-4 rounded-full'>Projects</a></li>
                <li className='list-none ml-16'><a href="#contact" className='hover:bg-forest hover:text-white px-1.5 px-4 rounded-full'>Contact</a></li>
                <li className='list-none ml-16'><a href="CV-ErickDamian.pdf" download='CV-ErickDamian.pdf' className='flex items-center hover:bg-forest hover:text-white px-1.5 px-4 rounded-full'>
                    <BsFillFileArrowDownFill/>
                    <p className='mx-2'>CV</p>
                </a></li>
            </ul>
        </div>
    );
}
export default NavBar;
