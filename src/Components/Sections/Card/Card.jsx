import React from 'react'

/* Style */
import '../../../assets/style/Components/Card.sass'

export const Card = ({item}) => {

    console.log(item)
    return (
        <div className='Card__container' style={{backgroundImage: `${item.image}`}}>
            
        </div>
    )
}
