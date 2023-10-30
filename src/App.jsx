import "./app.scss";
import Contact from "./Components/Contact/Contact.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
//import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Services from "./components/Services/Services.jsx";

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
