import Footer from "../Component/Footer";
import NavBar from "./Navbar";
import "./About.css";
import emmanuel from "../assets/images/emmanuel.png";
import architectIcon from "../assets/icons/architecticon.png";
import sofa from "../assets/icons/sofa.png";
import table from "../assets/icons/table.png";
import carpentry from "../assets/icons/carpentry.png";
import deal from "../assets/icons/deal.png";
import construction from "../assets/icons/construction.png";

function Service() {
  const content = [
    {
      id: 1,
      text: "Conception et exécutiondes travaux de génie civil",
      icon: construction,
    },
    {
      id: 2,
      text: "Construction et installation sanitaire",
      icon: architectIcon,
    },
    {
      id: 3,
      text: "Approvisionnement et appui logistique aux différentes organisations",
      icon: deal,
    },
    { id: 4, text: "Menuiserie métallique", icon: table },
    {
      id: 5,
      text: "Fabrication des mobiliers pour des équipement des bâtimentspublics et privées",
      icon: sofa,
    },
    { id: 6, text: "Menuiserie en bois", icon: carpentry },
  ];
  return (
    <>
      <div className="aboutNav">
        <NavBar classe={"bluecolor"} />
      </div>
      <div className="container-fluid firstdiv">
        <div className="serviceemma">
          <div className="row" style={{ width: "100vw" }}>
            <div className="col-md-6 col-lg-6 col-sm-12 contentservice">
              <img src={emmanuel} alt="emmanuel" />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 contentservice">
              <div>
                <h2>SERVICES</h2>
                <p>Avec Confort de l’Art trouver des services des qualités</p>
              </div>
            </div>
          </div>
        </div>
        <div className="laqualite">
          <h2>La qualité de nos services nous différencie</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {content.map((index) => {
            return (
              <div className="col-md-6 col-lg-4 col-sm-12" key={index.id}>
                <div className="cardservice">
                  <div>
                    <div>
                      <img src={index.icon} />
                    </div>
                    <div className="textservice">
                      <p>{index.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="servicelitterature">
        <div>
        <h2>Nos Travaux en genie civile</h2>
        <p>
          Choisir une entreprise pour réaliser ses travaux de Génie Civil est
          une étape critique. Il faut en effet trouver l’entreprise qui sera à
          l’écoute de votre projet, de vos besoins, mais qui sera aussi capable
          de concevoir et d’élaborer des solutions techniques propres à vos
          spécificités.Or, le Génie Civil est un terme large qui recouvre un
          grand nombre de compétences. Il est de ce fait primordial de se
          diriger vers une entreprise sérieuse et spécialisée dans le type de
          travaux qui vous intéresse. Voici les étapes à suivre :
        </p>
        <button>voir plus</button>
        </div>
      </div>
      <div className="ceintureservice">

      </div>

      <Footer />
    </>
  );
}

export default Service;
