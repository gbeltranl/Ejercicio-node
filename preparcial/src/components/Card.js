import React from 'react'
import { FormattedMessage } from 'react-intl'

const Card = (props) => {
  return (
    <div className='card'>
        <img className="card-img-top" src={props.movie.poster} alt={"Poster de " + props.movie.name} referrerPolicy="no-referrer"></img>
        <div className="card-body">
    <h5 className="card-title">{props.movie.name}</h5>
    <p className="card-text">{props.movie.description}</p>
    <h6 className="card-text"><FormattedMessage id='Cast'/>: {props.movie.cast}</h6>

  </div>
    </div>
  )
}

export default Card