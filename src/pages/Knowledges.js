import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../components/Knowledges/Languages";
import Experiences from "../components/Knowledges/Experiences";
import Hobbies from "../components/Knowledges/Hobbies";
import OtherSkills from "../components/Knowledges/OtherSkills";

const Knowledges = () => {
  return (
    <div className="knowledges">
      {/* import de la navigation */}
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experiences />
        <Hobbies />
        <OtherSkills />
      </div>
    </div>
  );
};

export default Knowledges;
