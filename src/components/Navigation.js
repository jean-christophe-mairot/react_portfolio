import React from "react";
// appel de la librairie nalink
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/jc_mairot_ideas.jpg" alt="profil-jc-Mairot" />
          <h3>Jean Christophe Mairot</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          {/* on peut utiliser les navlink grace au router que l'on a fait dans app.js */}
          {/* on injecte un className que lorsque c'est actif 
          exemple changement de couleur du lien quand on click
          */}
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            {/* dans react quand on met un target blank on doit rajouter pour la securité un rel */}
            <a
              href="https://www.linkedin.com/in/mairot-jc-vfx-web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            {/* dans react quand on met un target blank on doit rajouter pour la securité un rel */}
            <a
              href="https://github.com/jean-christophe-mairot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            {/* dans react quand on met un target blank on doit rajouter pour la securité un rel */}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            {/* dans react quand on met un target blank on doit rajouter pour la securité un rel */}
            <a
              href="https://codepen.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>from jcm Scratch - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
// stop https://www.youtube.com/watch?v=pS0v5eY7W9k&ab_channel=FromScratch-D%C3%A9veloppementWeb 4202
