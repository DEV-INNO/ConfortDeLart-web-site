import React from "react";
import { Card } from "react-bootstrap";


function Cards() {
  return (
    <div className="service_container container">
      <div className="title_wrapper">
        <h2>Nos Spécialités</h2>
      </div>
      <div
        className="service_card row"
      >
        <div className="col-md-6 col-sm-6 col-lg-4 card">
          <h3>
            <p>Architecture​</p>
            Editez facilement vos murs, plafonds, portes, fenêtres, et bien plus
            encore
          </h3>
        </div>
        <div className="col-md-6 col-sm-6 card">
          
          <h3>
            <p>Conception de plan de vos maison</p>
            Visualiser vos plan que vous avez trouvez à partir de notre société
          </h3>
        </div>
        <div className="col-md-6 col-sm-6 card">
          
          <h3>
            <p>Conception de paysage</p>
            Nous contusion de paysage externe que interne de vos mason
          </h3>
        </div>
        <div className="col-md-6 col-sm-6 card">
          
          <h3>
            <p>Design interne</p>
            un ensemble de meubles ou vos objets dans la vue 3D en un seul clic
            pour une visualisation immédiate du résultat !
          </h3>
        </div>
        <div className="col-md-6 col-sm-6 card">
          
          <h3>
            <p>Solution complète</p>
            Démarrez un projet de construction, d’aménagement, de rénovation ou
            de décoration tant en intérieur qu’en extérieur !
          </h3>
        </div>
        <div className="col-md-6 col-sm-6 card">
          
          <h3>
            <p>Conception des routes</p>
            Nous faisons aussi de construction de vos route en tenant compte de
            la demande: comme la constriction de route du déserte agricole
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
