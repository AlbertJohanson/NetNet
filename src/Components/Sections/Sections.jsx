import React, { useState } from 'react'
import { movieData } from '../../data/movie-data'


/* Style */
import '../../assets/style/Components/SlideRows.sass'
import '../../assets/style/Components/Card.sass'
import { Link } from 'react-router-dom'
function Sections() {

    const [slideRow] = useState(movieData)

    
    return (
      <>
        {slideRow.map((slideItem) => {
          return (
            <div className="Sections__row" key={slideItem.id}>
              <h1>{slideItem.title}</h1>
              <div className="Sections_cards">
              {slideItem.data.map((item) => (
                   <Link to={`./title/${slideItem.id}/${item.movieid}`} key={item.movieid}  className='Card__container'>
                       <img src={item.image} alt=""/>
                   </Link>
              ))}
              </div>
            </div>
          );
        })}
      </>
    );
}

export default Sections
