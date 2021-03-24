import React, { Component } from "react";
//pour l'import de la bdd
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

class ProjectList extends Component {
  // pour la base de donnée dans src/data/
  //quand on appelera state.projects on fait appel à portfolioData de data
  state = {
    projects: portfolioData,
  };

  render() {
    //evite d'ecrire this.state en nota nt directement projects
    let { projects } = this.state;

    return (
      <>
        <div className="portfolioContent">
          <ul className="radioDisplay"></ul>
          <div className="projects">
            {projects.map((item) => {
              return <Project key={item.id} item={item} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ProjectList;
