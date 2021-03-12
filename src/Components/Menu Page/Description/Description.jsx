import React from 'react'

/* Assets */
import matlogo from '../../../../public/assets/Matrix-logo.svg'
import pluslogo from '../../../../public/assets/plus-icon.svg'
import infologo from '../../../../public/assets/infor-icon.svg'
import playlogo from '../../../../public/assets/play-icon.svg'

function Description() {
    return (
        <>
          <div className="hero__description">
              <div className="hero__description--logo">
                  <img src={matlogo} alt="Movie-logo"/>
              </div>
              <div className="hero__description--categories"></div>
              <div className="hero__description--actions">
                  <button className="btn-desc">
                      <img src={pluslogo} alt="Mi lista"/>
                      Mi lista
                  </button>
                  <button className="btn__play">
                     <img src={playlogo} alt="Reproducir"/>
                      Reproducir
                  </button>
                  <button className="btn-desc">
                      <img src={infologo} alt="info"/>
                      info
                  </button>
              </div>
          </div>  
        </>
    )
}

export default Description
