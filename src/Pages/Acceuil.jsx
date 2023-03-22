import Card from "../Component/Card";
import image from "../assets/images/image2.png";
import { motion } from "framer-motion";
import CardOne from "../Component/CardOne";
import Confor from "../Component/Confor";
import Service from "../Component/Service";
import Footer from "../Component/Footer";
import Slider from "react-slick";
import casque from "../assets/images/casque.png";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};
const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
    fontSize: "80px",
    fontWeight: "bolder",
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

function Acceuil() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <div id="back">
        <motion.div initial="initial" animate="animate" className="acceuil">
          <NavBar classe="redcolor"/>
          <motion.div
            className="content_wrapper"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: easeing }}
          >
            <div className="left_content_wrapper">
              <motion.h2>
                <motion.span
                  variants={firstName}
                  initial="initial"
                  animate="animate"
                  className="first"
                >
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    N
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    O
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    T
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    R
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    E&nbsp;
                  </motion.span>

                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    A
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    R
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    T&nbsp;
                  </motion.span>
                </motion.span>
                <br />
                <motion.span
                  variants={lastName}
                  initial="initial"
                  animate="animate"
                  className="last"
                >
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    F
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    A
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    I
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    T&nbsp;
                  </motion.span>

                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    V
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    O
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    T
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    R
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#fff" }}
                  >
                    E&nbsp;
                  </motion.span>
                  <br />

                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#FE0000" }}
                  >
                    C
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#FE0000" }}
                  >
                    O
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#FE0000" }}
                  >
                    N
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#FE0000" }}
                  >
                    F
                  </motion.span>
                  <motion.span
                    className="spanconfor"
                    variants={letter}
                    style={{ color: "#FE0000" }}
                  >
                    O
                  </motion.span>
                  <motion.span
                    variants={letter}
                    style={{ color: "#FE0000", fontSize: "20px" }}
                    className="spanconfor"
                  >
                    R
                  </motion.span>
                  <motion.span
                    variants={letter}
                    style={{ color: "#FE0000", fontSize: "20px" }}
                    className="spanconfor"
                  >
                    T
                  </motion.span>
                </motion.span>
              </motion.h2>
              <p style={{ color: "#fff" }}>
                CONFORT DE L’ART EST UNE ENTREPRISE OEUVRANT DANS LE DOMAINE
                D’IMMOBILIER ET DE MOBILIERS QUI PRETE SES SERVICES A SA
                CLIENTELE DEPUIS JANVIER 2015 SA LEGALISATION A ÉTÉ EFFECTIVE
                DEPUIS JUIN 2021
                <br />
              </p>
            </div>
            <motion.div className="right_content_wrapper">
              <div className="right_content_wrapper_image">
                <Slider {...settings}>
                  <img src={image} alt="carousel1" />
                  <img src={casque} alt="carousel2" />
                  <img src={image} alt="carousel3" />
                </Slider>
              </div>
              {/* <motion.img
              src={image}
              alt="bg"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            /> */}
            </motion.div>
          </motion.div>
          
        </motion.div>
        
      </div>
      <CardOne />
      <Confor />
      <Card />
      {/* <Personnel/> */}
      <Service />
      <Footer />
    </>
  );
}

export default Acceuil;
