import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

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

function NavBar({classe}) {
  return (
    <>
      <motion.header variants={stagger}>
            <motion.div className="logo-wrapper" variants={header}>
              <div className="logo">
              <img src={logo} alt="logo"/>
              </div >
              {/* Art <span>Confort</span> */}
            </motion.div>
            <motion.div className="menu_container" variants={stagger}>
              <span>
                <Link to="/" style={{textDecoration:"none", color:"inherit"}}>Acceuil</Link>
              </span>
              <span>
                <Link to="/about" style={{textDecoration:"none", color:"inherit"}}>A propos</Link>
              </span>
              <span>
                <a href="#projet" style={{textDecoration:"none", color:"inherit"}}>Projets</a>
              </span>
              <span>
                <Link to="/service" style={{textDecoration:"none", color:"inherit"}}>Service</Link>
              </span>
              <span>
                <a href="#item" style={{textDecoration:"none", color:"inherit"}}>Equipe</a>
                </span>
              <motion.span className={`${classe}`} id="menu" variants={header}>
                Contactez-nous
              </motion.span>
            </motion.div>
          </motion.header>
    </>
  );
}

export default NavBar;
