import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Koliada LLC Development",
    img: "Koliada-Demo.gif",
    desc: [
      "Leader of a 6-person team; Building front and back-end for Silicon Valley based company ‘Koliada LLC’ including authenticated User Interface, querying database, and purchase of SDK licenses. Utilizing cloud-hosted server Firebase User Authentication and Real-Time Database. React library along with JS, HTML, CSS to build UI and its components. Created UDP packet Listener and Generator (Node.JS, Python) synced up with a MongoDB database",
    ],
  },
  {
    id: 2,
    title: "DermAI Image Recognition Tool",
    img: "DermAI.png",
    desc: [
      "Image Recognition Service utilizing AWS, OpenAI API, and machine learning to diagnosis and offer treatment advice for various skin diseases. Trained a Machine Learning Model with over 10,000 images to recognize skin diseases. Used GPT-3 to suggest action and treatment. Automated entire process with Lambda Functions (written in Python) and API Gateway. Built front end with ReactJS to allow users to submit photos from their device and authentication using Amazon Cognito",
    ],
  },
  {
    id: 3,
    title: "HPA Management LLC",
    img: "HPA-Demo.gif",
    desc: [
      "Engaged in front-end and back-end web development at HPA Management LLC, employing full-stack techniques to oversee databases and manage client data",
      " ReactJS paired with HTML, CSS for front-end. Python (Django) for back-end",
    ],
  },
  {
    id: 4,
    title: "Network Traffic Visualizer",
    img: "Network-Traffic.png",
    desc: [
      "Capture Network Traffic:  Wireshark to capture network traffic going to and from the device - The captured data is saved in pcap format. Python Implementation: Read the captured pcap file and extracts source and destination IP addresses. Geo-Location Mapping: Python script attaches geographical coordinates (latitude and longitude) to the IP addresses using the GeoLiteCity database. KML File Generation: The Python script generates a KML (Keyhole Markup Language) file, which is a format used for geographic data. Google Maps Integration: The generated KML file can be integrated into Google Maps, allowing visualization of network traffic data on the map",
    ],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  let sentences = [];

  if (Array.isArray(item.desc)) {
    sentences = item.desc
      .join(". ")
      .split(". ")
      .filter((sentence) => sentence.trim() !== ""); // Filter out empty sentences
  } else if (typeof item.desc === "string") {
    sentences = item.desc
      .split(". ")
      .filter((sentence) => sentence.trim() !== ""); // Filter out empty sentences
  }

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <ul>
              {sentences.map((sentence, index) => {
                const trimmedSentence = sentence.trim();
                if (trimmedSentence) {
                  return <li key={index}>{trimmedSentence}.</li>;
                }
                return null; // Skip empty sentences
              })}
            </ul>
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
