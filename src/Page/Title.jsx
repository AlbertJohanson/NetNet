import React from 'react'
import { Link, Redirect, useParams } from 'react-router-dom';
import { getMovieById } from '../selectors/getMovieById';
import { getSectionById } from '../selectors/getSectionById';

/* Style */
import '../assets/style/Components/Title.sass'


export const Title = ({history}) => {

    const { sectionId, movieId } = useParams();
    const movie =   getMovieById(sectionId , movieId)

    const section = getSectionById(sectionId)

    if(!movie) {
        return <Redirect to="/" />
    }
  
    const handleReturn = () => {
  
      if(history.length <= 2) {
          history.push('/');
      }else {
          history.goBack();
      }
    }

    const {
        image,
        title,
        year,
        time,
        description,
        maturity,
        slug,
        directby
    } = movie

    return (
      <div className="description">
        <div className="description__header">
          <div onClick={handleReturn} to={"/"} className="description__header">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/return-icon.svg?alt=media&token=2635580a-8e3f-4706-bbe3-a0c74262b8fe"
              alt=""
            />
          </div>
        </div>
        <div className="description__title--image">
          <img src={image} alt="" />
        </div>
        <div className="description__title--details">
          <p>{title}</p>
          <div className="det">
            <p className="coin">99% de coincidencia</p>
            <p>{year}</p>
            <p className="matu">{maturity}</p>
            <p>{time}</p>
          </div>
        </div>
        <div className="description__title--btns">
          <button className="btn-play">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/play-icon.svg?alt=media&token=43f2cd8b-b8c6-44a8-86a5-91e446aae434"
              alt="Reproducir"
            />
            Reproducir
          </button>
          <button className="btn-down">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/Download.svg?alt=media&token=ecee8028-f5ea-4d2c-a159-ed9762d0597e"
              alt="Descargar"
            />
            Descargar
          </button>
        </div>
        <div className="description__title--desc">
          <p>{description}</p>
          <p className="person">
            Elenco : <span>{slug}</span>
          </p>
          <p className="person">
            Dirigido por: <span>{directby}</span>
          </p>
        </div>
        <div className="description__title--more">
          <button className="btn-desc">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/plus-icon.svg?alt=media&token=036c7349-48ef-4d51-81a9-e32a4bc1ddbd"
              alt="Mi lista"
            />
            Mi lista
          </button>
          <button className="btn-desc">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/Like.svg?alt=media&token=212a9450-463a-48f3-962e-22cd466acb2d"
              alt="Mi lista"
            />
            Calificar
          </button>
          <button className="btn-desc">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/Share.svg?alt=media&token=657f5123-eda1-46a1-898a-ee8d8e5ba219"
              alt="Mi lista"
            />
            Compartir
          </button>
        </div>
        <div>
            <div className="red-line"></div>
            <h1> Más Similares</h1>
        </div>
        <div className="description__title--recomendations">
          
            {section.data.map((r) => (
              <Link
                to={`./title/${r.id}/${r.movieid}`}
                key={r.movieid}
                className="Card__container"
              >
                <img src={r.image} alt="" />
              </Link>
            ))}
         
        </div>
      </div>
    );
}
