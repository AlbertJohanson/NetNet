import React from 'react'



function Description() {
    return (
        <>
          <div className="hero__description">
              <div className="hero__description--logo">
                  <img src='https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/Matrix-logo.svg?alt=media&token=1439e5d8-aeed-44c2-9e20-62a2b34d47f2' alt="Movie-logo"/>
              </div>
              <div className="hero__description--categories"></div>
              <div className="hero__description--actions">
                  <button className="btn-desc">
                      <img src='https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/plus-icon.svg?alt=media&token=036c7349-48ef-4d51-81a9-e32a4bc1ddbd' alt="Mi lista"/>
                      Mi lista
                  </button>
                  <button className="btn__play">
                     <img src='https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/play-icon.svg?alt=media&token=43f2cd8b-b8c6-44a8-86a5-91e446aae434' alt="Reproducir"/>
                      Reproducir
                  </button>
                  <button className="btn-desc">
                      <img src='https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/infor-icon.svg?alt=media&token=7434098d-2d4e-48a5-bd77-989e8d29b579' alt="info"/>
                      info
                  </button>
              </div>
          </div>  
        </>
    )
}

export default Description
