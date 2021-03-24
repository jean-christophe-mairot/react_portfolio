// class component rcc
import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  // création d'un objet
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.8 },
      { id: 2, value: "css", xp: 1.5 },
      { id: 3, value: "php", xp: 1 },
      { id: 4, value: "html", xp: 1.5 },
    ],
    frameworks: [
      { id: 1, value: "Bootstrap", xp: 1.5 },
      { id: 2, value: "Sass", xp: 0.7 },
      { id: 3, value: "react", xp: 0.3 },
      { id: 4, value: "Symfony", xp: 0.2 },
      { id: 5, value: "Wordpress", xp: 1.5 },
    ],
  };
  render() {
    // pour utiliser les deux objets pour pointé les composant this.state.frameworks
    let { languages, frameworks } = this.state;

    return (
      <div className="languageFrameworks">
        <ProgressBar
          // je te passe les info de language
          languages={languages} //envoie le tableau en haut
          className="languagesDisplay" //une class
          title="languages" //un titre
        />
        <ProgressBar
          // passe les info de frameworks
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
