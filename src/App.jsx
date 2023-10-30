import "./app.scss";
import Contact from "./Components/Contact/Contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
//import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";

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
