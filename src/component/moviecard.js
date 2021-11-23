import React from 'react'
import ReactStars from "react-rating-stars-component";

function Moviecard({el}) {
    return (
        <div   className="car" >
            <h1>{el.title}</h1>
            <p>{el.description} </p>
            <img src={el.posterUrl} alt=""/>
            <ReactStars count={5} value={el.rate} size={24} activeColor="#ffd700" />

        </div>
    )
}

export default Moviecard
