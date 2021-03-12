import React from 'react'

/* Assets */
import logo from "../../../../public/assets/logo.svg";
function Header() {
    return (
        <div className="hero__header">
          <div className="hero__header--logo">
            <img src={logo} alt="Logo de NetNet" />
          </div>
          <div className="hero__header--links">
            <ol>
              <a href="/#">
                <li>Series</li>
              </a>
            </ol>
            <ol>
              <a href="/#">
                <li>Películas</li>
              </a>
            </ol>
            <ol>
              <a href="/#">
                <li>Mi lista</li>
              </a>
            </ol>
          </div>
        </div>
    )
}

export default Header
