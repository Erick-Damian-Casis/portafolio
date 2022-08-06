import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Project from "./components/Project";
import Technology from "./components/Technology";
import Contact from "./components/Contact";
import Network from "./components/Network";


function App() {
  
  return (
    <div className="App">
        <NavBar/>
        <Header/>
        <Technology/>
        <Project/>
        <Contact/>
        <Network/>
    </div>
  );
}

export default App;
