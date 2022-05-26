import React from 'react'

export const Card = (props) => {
    const {title , url, description} = props;
    return (
        <div className='card'>
            <img class= "card-image"src={url} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
