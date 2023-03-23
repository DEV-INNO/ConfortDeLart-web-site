import Footer from "../Component/Footer";
import NavBar from "./Navbar";
import "./About.css";
import hierar from "../assets/icons/hierar.png";
import budget from "../assets/icons/budget.png";
import promotion3 from "../assets/icons/promotion3.png";

function VoirPlus() {
  const content = [
    {
      id: 1,
      title: "Etudier la faisabilité de votre projet",
      content:
        "Veille à bien sélectionner les bons matériaux et les meilleurs artisans pour vous garantir un bâtiment solide et fiable dans le temps.",
      icon: hierar,
    },
    {
      id: 2,
      title: "Obtenir une estimation de prix ou de l’inspiration",
      content:
        "est présent sur toute la chaine de valeurs des métiers du bâtiments. Du gros oeuvre à la rénovation en passant par le second…",
      icon: budget,
    },
    {
      id: 3,
      title: "Obtenir des devis à fournir à votre banque",
      content:
        "Vos travaux livrés, nous restons disponibles pour intervenir immédiatement en cas de problème",
      icon: promotion3,
    },
  ];
  return (
    <>
      <div className="aboutNav">
        <NavBar classe={"bluecolor"} />
      </div>
      <div className="container-fluid voirplus">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div>
              <h2>Nos Travaux en genie civile</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-6"></div>
        </div>
      </div>
      <div className="plusceinture">
        <div className="red"></div>
        <div className="blue"></div>
      </div>
      <div className="container">
        <div className="row">
          {content.map((index) => {
            return (
              <div className="col-md-6 col-lg-4 cardplus" key={index.id}>
                <div className="voirpluscard">
                  <div>
                    <img src={index.icon} />
                    <h3>{index.title}</h3>
                    <p>{index.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default VoirPlus;
