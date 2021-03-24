import React, { Component } from "react";

class Project extends Component {
  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;
    //pour les props dans une class on doit ajouter le this.
    console.log(this.props);
    return (
      <>
        <div className="project">
          <div className="icons">
            {languagesIcons.map((icon) => (
              <i className={icon} key={icon}></i>
            ))}
          </div>
          <h3>{name}</h3>
          <img src={picture} alt="" />
          <span className="infos">
            <i className="fas fa-plus-circle"></i>
          </span>
        </div>
      </>
    );
  }
}

export default Project;
