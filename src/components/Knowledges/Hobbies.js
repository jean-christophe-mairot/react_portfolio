import React from "react";

const Hobbies = () => {
  return (
    <>
      <div className="hobbies">
        <h3>Intérêts</h3>
        <ul>
          <li className="hobby">
            <i className="fas fa-camera-retro"></i>
            <span>Photographie</span>
          </li>
          <li className="hobby">
            <i className="fas fa-fighter-jet"></i>
            <span>Simulations Aériennes</span>
          </li>
          <li className="hobby">
            <i className="fas fa-snowboarding"></i>
            <span>Snow Board | Ski</span>
          </li>
          <li className="hobby">
            <i className="fas fa-dice"></i>
            <span>Modelisme | Jeux de plateau</span>
          </li>
          <li className="hobby">
            <i className="fas fa-print"></i>
            <span>Impression 3D</span>
          </li>
          <li className="hobby">
            <i className="fas fa-route"></i>
            <span>Séjour à l'écrangé</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hobbies;
