import React from "react";

function Cards() {
  return (
    <div id="team" className="team mb-5 specialite">
      <h2>Nos Spécialités</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 specialitecard">
                <div className="member specialitecard" data-aos="zoom-in" data-aos-delay="100">
                  <div className="member-info">
                    <h4>Architecture​</h4>
                    <p>
                      Editez facilement vos murs, plafonds, portes, fenêtres, et
                      bien plus encore
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member specialitecard" data-aos="zoom-in" data-aos-delay="200">
                  <div className="member-info">
                    <h4>Conception de plan de vos maison</h4>
                    <p>
                      Visualiser vos plan que vous avez trouvez à partir de
                      notre société
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member specialitecard" data-aos="zoom-in" data-aos-delay="300">
                  <div className="member-info">
                    <h4>Conception de paysage</h4>

                    <p>
                      Nous contusion de paysage externe que interne de vos mason
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member specialitecard" data-aos="zoom-in" data-aos-delay="400">
                  <div className="member-info">
                    <h4>Design interne</h4>
                    <p>
                      un ensemble de meubles ou vos objets dans la vue 3D en un
                      seul clic pour une visualisation immédiate du résultat !
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member specialitecard" data-aos="zoom-in" data-aos-delay="400">
                  <div className="member-info">
                    <h4>Solution complète</h4>
                    <p>
                      Démarrez un projet de construction, d’aménagement, de
                      rénovation ou de décoration tant en intérieur qu’en
                      extérieur !
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member specialitecard" data-aos="zoom-in" data-aos-delay="400">
                  <div className="member-info">
                    <h4>Conception des routes</h4>
                    <p>
                      Nous faisons aussi de construction de vos route en tenant
                      compte de la demande: comme la constriction de route du
                      déserte agricole
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
