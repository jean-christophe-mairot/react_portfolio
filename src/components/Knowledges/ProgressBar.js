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
            // calcul pour la bar
            let progressBar = (item.px / xpYears) * 100 + "%";
            return (
              <div key={item.id} className="languagesList">
                <ul>
                  <li>{item.value}</li>
                  {/* prend la width de façon dynamique */}
                  <div
                    className="progressBar"
                    style={{
                      width: ProgressBar,
                    }}
                  ></div>
                </ul>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ProgressBar;
