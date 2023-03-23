import React from "react";
import "./service.css";
import client from "../assets/icons/client.png";
import chantier from "../assets/icons/chantier.png";
import ingenieur from "../assets/icons/ingenieur.png";
import projet from "../assets/icons/projet.png";
import Slider from "react-slick";
import team1 from "../assets/images/team/team1.jpg";
import team2 from "../assets/images/team/team2.jpg";
import team3 from "../assets/images/team/team3.jpg";
import team4 from "../assets/images/team/team4.jpg";

function Service() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="services" id="projet">
      <h4 className="titleProjet">Nos Récent Projets</h4>
      <div className="bodyCard">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 col-lg-4 col-sm-12"
              style={{ marginBottom: "10px" }}
            >
              <div className="projetone carteall">
                <div className="cards">
                  <h6>Salle Polyvalente</h6>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-sm-12"
              style={{ marginBottom: "10px" }}
            >
              <div className="projetwo carteall">
                <div className="cards ">
                  <h6>Maison d'habitation</h6>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-sm-12 "
              style={{ marginBottom: "10px" }}
            >
              <div className="projettree carteall">
                <div className="cards">
                  <h6>Maison commerciale</h6>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-sm-12 "
              style={{ marginBottom: "10px" }}
            >
              <div className="projetfour carteall">
                <div className="cards">
                  <h6>Appartement</h6>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-sm-12 "
              style={{ marginBottom: "10px" }}
            >
              <div className="projetfive carteall">
                <div className="cards ">
                  <h6>Décoration interne</h6>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-sm-12 "
              style={{ marginBottom: "10px" }}
            >
              <div className="projetsix carteall">
                <div className="cards ">
                  <h6>Salle Terrase</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="counts" className="counts mb-10 mt-20">
        <div className="container">
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <img src={projet} alt="execution" />
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Projets en exécution</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <img src={client} alt="client" />
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Clients</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <img src={ingenieur} alt="ingenieur" />
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Ingenieur</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <img src={chantier} alt="chantier" />
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Chantiers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ceinture"></div>
      <div className="personnels">
        <h3 className="lateam">TEAM CONFORT DE L'ART</h3>
      <Slider {...settings}>
        <div className="cardpersonne">
          <div>
            <div>
              <div>
                <img src={team1} alt="chantier" />
              </div>
              <div>
                <h3>Josephine NDEZE</h3>
                <p>Ingenieur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardpersonne">
          <div>
            <div>
              <div>
                <img src={team2} alt="chantier" />
              </div>
              <div>
                <h3>Josephine NDEZE</h3>
                <p>Ingenieur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardpersonne">
          <div>
            <div>
              <div>
                <img src={team3} alt="chantier" />
              </div>
              <div>
                <h3>Josephine NDEZE</h3>
                <p>Ingenieur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardpersonne">
          <div>
            <div className="cardser">
              <div>
                <img src={team4} alt="chantier" />
              </div>
              <div className="cardidentite">
                <h3>Josephine NDEZE</h3>
                <p>Ingenieur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardpersonne">
          <div>
            <div>
              <div>
                <img src={team1} alt="chantier" />
              </div>
              <div>
                <h3>Josephine NDEZE</h3>
                <p>Ingenieur</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      </div>
    </div>
  );
}

export default Service;
