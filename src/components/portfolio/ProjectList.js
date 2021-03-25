import React, { Component } from "react";
//pour l'import de la bdd
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

class ProjectList extends Component {
  // pour la base de donnée dans src/data/
  //quand on appelera state.projects on fait appel à portfolioData de data
  state = {
    projects: portfolioData,

    // petite base de données pour les tri de projet
    radios: [
      { id: 1, value: "javascript" },
      { id: 2, value: "css" },
      { id: 3, value: "react" },
      { id: 4, value: "php" },
    ],
    //de base selectedradio est sur js puisque tous les projet ont du js
    //c la value par defaut
    //donc ils sont tous affichés
    selectedRadio: "javascript",
  };

  handleRadio = (event) => {
    // console.log(event.target.value);
    let radio = event.target.value;
    //change l'etat de selectedRadio recup la valeur de radio
    this.setState({ selectedRadio: radio });
  };

  render() {
    //evite d'ecrire this.state en nota nt directement projects
    let { projects, radios, selectedRadio } = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {/* ici les bouton radio de tri de projet */}
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  // si selectedRadio value est stocké dans le state
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>
        <div className="projects">
          {projects
            // en fasant le filter avant le map on tri en premier lieu puis on map en suite
            //
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
