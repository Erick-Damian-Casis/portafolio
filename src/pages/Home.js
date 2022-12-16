import Header from "../components/Header";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Contact from "../components/Contact";
import Technology from "../components/Technology";
import Project from "../components/Project";

function Home(){

    return(
        <div className='min-h-screen bg-orange-100'>
            <NavBar/>
            <Header/>
            <About/>
            <hr className='h-0.5 w-auto bg-orange-100 relative my-2'/>
            <hr className='h-0.5 w-auto mx-10 bg-orange-100 relative'/>
            <Technology/>
            <hr className='h-0.5 w-auto mx-10 bg-orange-100 relative top-2'/>
            <Project/>
            <hr className='h-0.5 w-auto mx-10 bg-orange-100 relative top-2'/>
            <Contact/>
        </div>
    )
}
export default Home;
