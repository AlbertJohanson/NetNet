import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

/* Style */
import '../../assets/style/Components/BottomNav.sass'



function BottomNav() {
    return (
        <div className="nav__container">
            <div className="nav__container--tab">
                <div className="nav__container--link">
                    <FontAwesomeIcon icon={faHome} size="2x"/>
                    <p>Inicio</p>
                </div>
            </div>
            <div className="nav__container--tab">
                <p>Proximamente</p>
            </div>
            <div className="nav__container--tab">
                <p>Buscar</p>
            </div>
            <div className="nav__container--tab">
                <p>Descargas</p>
            </div>
        </div>
    )
}

export default BottomNav
