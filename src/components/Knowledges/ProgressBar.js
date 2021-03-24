import React from "react";

// on recupère les props de languages
const ProgressBar = (props) => {
  // le premier corespond au progressBar de languages
  console.log(props);

  return (
    <div className={props.className}>
      {/* information du titre passé : là c language */}
      <h3>{props.title}</h3>
      <div className="years">
        <span>Années d'expérience</span>
        <span>1 ans</span>
        <span>2 ans</span>
      </div>
      <div>
        {
          // fait appel aux tableaux de languages chaque element des tableaux est un item
          props.languages.map((item) => {
            let xpYears = 2;
            // calcul pour la taille de la barre
            let progressBar = (item.xp / xpYears) * 100 + "%";
            return (
              // il faut toujours une key
              <div key={item.id} className="languagesList">
                <li>{item.value}</li>
                {/* prend la width de façon dynamique */}
                <div
                  className="progressBar"
                  // ajout de style toujours {{}}
                  style={{
                    width: progressBar,
                  }}
                ></div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ProgressBar;
