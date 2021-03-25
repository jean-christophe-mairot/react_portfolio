// class component rcc
import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  // création d'un objet
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1 },
      { id: 2, value: "php", xp: 1.2 },
      { id: 3, value: "Html", xp: 1.5 },
      { id: 4, value: "CSS", xp: 1.5 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.7 },
      { id: 2, value: "Sass", xp: 0.7 },
      { id: 3, value: "Symfony", xp: 0.3 },
      { id: 4, value: "Bootstrap", xp: 1.5 },
      { id: 5, value: "WordPress", xp: 1.5 },
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
