import React from "react";
import { useState } from "react";
import StarRatingComponent from 'react-star-rating-component';
import "./Filter.css"

const Filter = ({search,searchRating,newRating}) => {
    const [rating, setRating] = useState(1);
    const onStarClick=(nextValue, prevValue, Name)=> {
        searchRating(nextValue)
    }


return (
    <div className="search">
        <input type="text" placeholder="Search For a Movie Here..." onChange={(e)=>search(e.target.value)}/>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={newRating}
          onStarClick={onStarClick}/>
    </div>
)
}

export default Filter;