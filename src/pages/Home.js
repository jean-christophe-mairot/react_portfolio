import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* on appel le module Navigation */}
        <Navigation />
        <div className="homeContent">
          <div className="content">
            <h1>Jean Christophe Mairot</h1>
            <h2>Développeur Web & Web Mobile</h2>
            <div className="pdf">
              <a href="./media/jcmairot_cv_25022021.jpg" target="_blank">
                Télécharger CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
