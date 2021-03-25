import React, { Component } from "react";

class Project extends Component {
  state = {
    //les infos ne sont pas visible
    showInfo: false,
  };
  // prend en charge l'info
  handleInfo = () => {
    // mettre en place mise à jour du state
    this.setState({
      // donne la valeur inverse de this.state.showInfo
      showInfo: !this.state.showInfo,
    });
  };

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
          {/* quand click sur la photo on montre l'info */}
          <img src={picture} onClick={this.handleInfo} alt="" />
          <span className="infos" onClick={this.handleInfo}>
            <i className="fas fa-plus-circle"></i>
          </span>
          {/* le && implique une condition pour executer */}
          {this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a
                      href={source}
                      rel="noopener noreferrer"
                      className="button"
                      target="_blank"
                    >
                      Code source
                    </a>
                  </div>
                </div>
                <p className="text">{info}</p>
                <div className="button return" onClick={this.handleInfo}>
                  Retourner sur la page
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Project;
