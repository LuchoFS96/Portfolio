import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Landing } from "./Components/Landing/Landing";
import { Experience } from "./Components/Experience/Experience";
import { Skills } from "./Components/Skills/Skills";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Landing />
      {/* <Experience />
      <Skills />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
