import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Technology from "../components/Technology";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Network from "../components/Network";

function Home(){
    return(<div>
        <NavBar/>
        <Header/>
        <Technology/>
        <Project/>
        <Contact/>
        <Network/>
    </div>)
}
export default Home;