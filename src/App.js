import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Skills from './components/skills';
import Tools from './components/Tools';
import Projects from './components/projects';
import Contact from './components/contact';





function App() {
  return (
    <div className="App">
  

    <Nav />
    <Main />
    <Skills/>
    <Tools />
    <Projects />
    <Contact />

     
    </div>

  );
}

export default App;
