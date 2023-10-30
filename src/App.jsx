import "./app.scss";
import Contact from "./Components/Contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
//import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
