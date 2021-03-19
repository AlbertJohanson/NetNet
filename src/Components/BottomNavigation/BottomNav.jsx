import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faDownload,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

/* Style */
import "../../assets/style/Components/BottomNav.sass";

function BottomNav() {
  return (
    <div className="nav__container">
      <div className="nav__container--tab">
        <div className="nav__container--link">
          <FontAwesomeIcon icon={faHome} size="2x" color="white"/>
          <p>Inicio</p>
        </div>
      </div>
      <div className="nav__container--tab">
      <div className="nav__container--link">
          <FontAwesomeIcon icon={faPlay} size="2x" color="white"/>
          <p>Proximamente</p>
        </div>
      </div>
      <div className="nav__container--tab">
        <div className="nav__container--link">
          <FontAwesomeIcon icon={faSearch} size="2x" color="white"/>
          <p>Buscar</p>
        </div>
      </div>
      <div className="nav__container--tab">
        <div className="nav__container--link">
          <FontAwesomeIcon icon={faDownload} size="2x" color="white"/>
          <p>Descargas</p>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
