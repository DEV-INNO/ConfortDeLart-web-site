import Footer from "../Component/Footer";
import NavBar from "./Navbar";
import "./About.css";
import validation from "../assets/icons/validation.png";
import visualisation from "../assets/icons/visualisation.png";
import valeur from "../assets/icons/valeur.png";
import mission from "../assets/icons/mission.png";
import promotion from "../assets/icons/promotion.png";
import metal from "../assets/icons/metal.png";

function Abouts({ title }) {
  return (
    <div>
      <div className="aboutNav">
        <NavBar />
      </div>
      <div className="apropos">
        <h2>A PROPOS</h2>
      </div>
      <div className="container apropofirst">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
            <div>
              <h2>CONFORT DE L’ART</h2>
              <div>
                <p>
                  Est une entreprise œuvrant dans le domaine d’immobilier et de
                  mobiliers qui prête ses services a sa clientèle depuis janvier
                  2015. sa légalisation a été effective depuis juin 2021.
                </p>
                <p>
                  l’esprit d’initiative personnel pour un encadrement de la
                  jeunesse et l’amour du travail bien fait en toute honnêteté
                  lui a valu le privilège de mériter la confiance des
                  particuliers ainsi que certaines organisations avant même la
                  reconnaissance de l’existence de l’entreprise légalement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 secondabout"></div>
        </div>
      </div>
      <div className="container apropofirst">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
            <div>
              <h2>
                Pourquoi choisir <br />
                confort de l'art
              </h2>
              <div>
                <p>
                  En choisissant confort de l’Art comme partenaire vous
                  contribuez à la baisse de la courbe du taux de chaumage par un
                  bon encadrement professionnel des jeune désœuvrés . Aussi vous
                  avez la chance d’aboutir en temps réel un résultat qui remplis
                  les 5 piliers recommandés par l’évaluation de réussite d’un
                  projet de construction c’est-à-dire :
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 secondabout">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                  <div className="secondaboutsecond"></div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                  <div className="secondaboutsecond"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="iconsapropos">
          <div className="apropos_icons">
            <div>
              <img src={validation} alt="validation" />
            </div>
            <div>
              <p>
                L’utilité <br />
                du projet
              </p>
            </div>
          </div>
          <div className="apropos_red">
            <div>
              <img src={validation} alt="validation" />
            </div>
            <div>
              <p>
                La durabilité <br />
                du projet
              </p>
            </div>
          </div>
          <div className="apropos_icons">
            <div>
              <img src={validation} alt="validation" />
            </div>
            <div>
              <p>
                La beauté <br />
                du projet
              </p>
            </div>
          </div>
          <div className="apropos_red">
            <div>
              <img src={validation} alt="validation" />
            </div>
            <div>
              <p>
                L’économie <br />
                du projet
              </p>
            </div>
          </div>
          <div className="apropos_icons">
            <div>
              <img src={validation} alt="validation" />
            </div>
            <div>
              <p>
                L’écologie <br />
                du projet
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid vision">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-md-6 col-sm-12 vvm">
            <img src={mission} alt="mission" />
            <h2>MISSION</h2>
            <p>
              Mi vitae duis vel consequat netus condimentum hendrerit malesuada
              netus ornare urna.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 col-md-6 col-sm-12 vvm">
            <img src={visualisation} alt="visualisation" />
            <h2>VISION</h2>
            <p>
              Mi vitae duis vel consequat netus condimentum hendrerit malesuada
              netus ornare urna.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 col-md-6 col-sm-12 vvm">
            <img src={valeur} alt="valeur" />
            <h2>VALEUR</h2>
            <p>
              Mi vitae duis vel consequat netus condimentum hendrerit malesuada
              netus ornare urna.
            </p>
          </div>
        </div>
      </div>
      <div className="container apropofirst">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
            <div>
              <h2>
                NOTRE ART
                <br /> VOTRE CONFORT
              </h2>
              <div>
                <p>
                  Petits ou grands travaux de construction, vos projets méritent
                  un partenaire fiable et efficace. Nous ne faisons aucun
                  compromis sur la qualité. Toutes nos réalisations sont
                  analysées et étudiées avec le plus grand soin pour répondre à
                  vos attentes. En matière de construction, Confort de l’Art
                  dispose d’un savoir-faire reconnu dans les domaines du Génie
                  Civil, des routes, de la construction et la rénovation de
                  bâtiments et d’ouvrages d’art
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 secondabout"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <div className="derniere" style={{backgroundColor:"#AD0101"}}>
              <img src={metal} alt="metal" />
              <h2>Bâtiment métallique</h2>
              <p>
                Fournisseur de bâtiments métalliques, la mise en œuvre simple de
                nos solutions et le prix de nos bâtiments et hangars industriels
                vous permettront d’optimiser votre temps et votre budget
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <div className="derniere" style={{backgroundColor:"#040429"}}>
              <img src={promotion} alt="promotion" />
              <h2>Bâtiment de promotion</h2>
              <p>
                Nos bâtiments en promotions répondent aux besoins de nos clients
                souhaitant disposer d’une construction métallique en kit
                rapidement et à prix réduit
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Abouts;
