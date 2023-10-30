import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Koliada LLC Development",
    img: "/Koliada-Demo.gif",
    desc: "Leader of a 6-person team; Building front and back-end for Silicon Valley based company ‘Koliada LLC’ including authenticated User Interface, querying database, and purchase of SDK licenses. Utilizing cloud-hosted server Firebase User Authentication and Real-Time Database. React library along with JS, HTML, CSS to build UI and its components. Created UDP packet Listener and Generator (Node.JS, Python) synced up with a MongoDB database.",
  },
  {
    id: 2,
    title: "DermAI Image Recognition Tool",
    img: "/DermAI.png",
    desc: "Image Recognition Service utilizing AWS, OpenAI API, and machine learning to diagnosis and offer treatment advice for various skin diseases. Trained a Machine Learning Model with over 10,000 images to recognize skin diseases. Used GPT-3 to suggest action and treatment. Automated entire process with Lambda Functions (written in Python) and API Gateway. Built front end with ReactJS to allow users to submit photos from their device and authentication using Amazon Cognito.",
  },
  {
    id: 3,
    title: "HPA Management LLC",
    img: "/HPA-Demo.gif",
    desc: "Engaged in front-end and back-end web development at HPA Management LLC, employing full-stack techniques to oversee databases and manage client data. ReactJS paired with HTML, CSS for front-end. Python (Django) for back-end.",
  },
  {
    id: 4,
    title: "Network Traffic Visualizer",
    img: "/Network-Traffic.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
