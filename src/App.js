// navigation du site
//import react
import React from "react";
//utilisation d'une lib de node js router dom
//le switch c pour la 404
import { BrowserRouter, Route, Switch } from "react-router-dom";
//on importe chaque pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    //   <> et </> cela remplace les fragments
    <>
      {/* l'application est contenu dans le browserRouter */}
      <BrowserRouter>
        {/* le switch si tu trouve le chemmin tu l'affiche sinon 404 c pour cela qu'il est en bas */}
        <Switch>
          {/* si le chemin c'est la page d'accueil tu met le component home on recommence pour chaque pages */}
          {/* exact permet d'afficher que / et non /fkjgvd */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/competences" exact component={Knowledges}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/portfolio" exact component={Portfolio}></Route>
          {/* pour la 404 */}
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
