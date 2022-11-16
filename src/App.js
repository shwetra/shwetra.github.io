
import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner';
import Contact from './Components/Contact/Contact';
import Github from './Components/Github';
import Navbar from './Components/Navbar';
import Project from './Components/Projects/Project';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer';
import Statitics from './Components/Stactics/Statitics';

function App() {
  return (
    <div className="App">
    {/* <h1>hii</h1>
     */}
     <Navbar/>
     <Banner/>
     <About/>
     <Skills/>

     <Github/>
    <Statitics/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
