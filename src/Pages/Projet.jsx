import Footer from "../Component/Footer";
import NavBar from "./Navbar";
import "./About.css";
import validation from "../assets/icons/validation.png";

function Projet() {
  return (
    <>
      <div className="aboutNav">
        <NavBar />
      </div>
      <div className="projet">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-12 projetentete">
              <p>
                L’objectif d’un projet de construction est de se voir livrer une
                habitation qui respecte les plans, les normes et surtout à
                temps. Ce sont les raisons pour lesquelles il est important de
                mettre en œuvre un plan d’action
              </p>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 projetentete">
              <h2>Projets</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pillier">
          <h2>
            Les 5 piliers recommandés par l’évaluation de réussite d’un projet
            de construction
          </h2>
        </div>
      </div>
      <div className="container tiquette">
        <div className="projetvalid blue">
          <div className="entete">
            <img src={validation} alt="projet validation" />
            <p>L’utilité du projet</p>
          </div>
          <div className="validfoot">
            <p>
              Elle rapproche les clients et les équipes, crée une vision de
              réussite du projet
            </p>
          </div>
        </div>
        <div className="projetvalid red">
          <div className="entete">
            <img src={validation} alt="projet validation" />
            <p>La durabilité du projet</p>
          </div>
          <div className="validfoot">
            <p>
              Est qualifié de durable quand une utilisation continue de ses
              résultats.
            </p>
          </div>
        </div>
        <div className="projetvalid blue">
          <div className="entete">
            <img src={validation} alt="projet validation" />
            <p>La beauté du projet</p>
          </div>
          <div className="validfoot">
            <p>
              Entend créer un souffle nouveau, une ouverture d'inspiration
              quotidienne pour tous
            </p>
          </div>
        </div>
        <div className="projetvalid red">
          <div className="entete">
            <img src={validation} alt="projet validation" />
            <p>L’économie du projet</p>
          </div>
          <div className="validfoot">
            <p>
              une entreprise peut être tentée de recourir à la préfabrication
              pour la conception.
            </p>
          </div>
        </div>
        <div className="projetvalid blue">
          <div className="entete">
            <img src={validation} alt="projet validation" />
            <p>L’écologie du projet</p>
          </div>
          <div className="validfoot">
            <p>
              Le suivi environnemental est une opération à caractère analytique.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projet;
