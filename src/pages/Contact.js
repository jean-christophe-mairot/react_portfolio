import React from "react";
import Navigation from "../components/Navigation";
// recup dans la lib ajoutée react-copy-to-clipboard avec npm
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <>
      <div className="contact">
        {/* import de la navigation */}
        <Navigation />
        <div className="contactContent">
          <div className="header"></div>
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Montereau Fault Yonne</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0625800613">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("Téléphone copié !");
                    }}
                  >
                    06 25 80 06 13
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="jcmairot@gmail.com">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("Email copié !");
                    }}
                  >
                    jcmairot@gmail.com
                  </span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
          <div className="socialNetwork">
            <ul>
              {/* dans react quand on met un target blank on doit rajouter pour la securité un rel */}
              <a
                href="https://www.linkedin.com/in/mairot-jc-vfx-web/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
                <h4>Linkedin</h4>
              </a>

              {/* dans react quand on met un target blank on doit rajouter pour la securité un rel */}
              <a
                href="https://github.com/jean-christophe-mairot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                <h4>Github</h4>
              </a>

              {/* dans react quand on met un target blank on doit rajouter pour la securité un rel */}
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
                <h4>Twitter</h4>
              </a>

              {/* dans react quand on met un target blank on doit rajouter pour la securité un rel */}
              <a
                href="https://codepen.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen"></i>
                <h4>Codepen</h4>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
