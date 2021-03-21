import React from 'react'

/* Assets */
function Header() {
    return (
        <div className="hero__header">
          <div className="hero__header--logo">
            <img src='https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/logo.svg?alt=media&token=5f7ceae1-1a22-478c-a563-f203380f3fdf' alt="Logo de NetNet" />
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
