import React from "react";
import architect from "../assets/icons/architect.png";
import conception from "../assets/icons/plan.png";
import paysage from "../assets/icons/paysage.png";
import interne from "../assets/icons/interne.png";
import solution from "../assets/icons/solution.png";
import routes from "../assets/icons/routes.png";

function Cards() {
  const items = [
    {
      id: 1,
      icon: architect,
      title: "Architecture​",
      label:
        "Editez facilement vos murs, plafonds, portes, fenêtres, et bien plus encore",
    },
    {
      id: 2,
      icon: conception,
      title: "Conception de plan de vos maison",
      label:
        "Visualiser vos plan que vous avez trouvez à partir de notre société",
    },
    {
      id: 3,
      icon: paysage,
      title: "Conception de paysage",
      label: "Nous contusion de paysage externe que interne de vos mason",
    },
    {
      id: 4,
      icon: interne,
      title: "Design interne",
      label:
        "un ensemble de meubles ou vos objets dans la vue 3D en un seul clic pour une visualisation immédiate du résultat !",
    },
    {
      id: 5,
      icon: solution,
      title: "Solution complète",
      label:
        "Démarrez un projet de construction, d’aménagement, de rénovation ou de décoration tant en intérieur qu’en extérieur !",
    },
    {
      id: 6,
      icon: routes,
      title: "Conception des routes",
      label:
        "Nous faisons aussi de construction de vos route en tenant compte de la demande: comme la constriction de route du déserte agricole",
    },
  ];
  return (
    <div id="team" className="team mb-5 specialite">
      <h2>Nos Spécialités</h2>
      <div className="container">
        <div className="row">
          {items.map((index) => {
            return (
              <div className="col-md-6 col-lg-4 col-sm-12" key={index.id}>
                <div className="cardservice">
                  <div>
                    <div>
                      <img src={index.icon} />
                    </div>
                    <div>
                      <h5>{index.title}</h5>
                    </div>
                    <div>
                      <p>{index.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
