import React from 'react'

/* Assets */

import logo from '../../../public/assets/logo.svg'

/* Style */
import '../../assets/style/Components/Hero.css'
function Hero() {
    return (
        <>
          <div className="hero">
            <div className="hero__header">
                 <div className="hero__header--logo">
                    <img src={logo} alt="Logo de NetNet"/>   
                 </div>   
            </div>    
          </div>  
        </>
    )
}

export default Hero
