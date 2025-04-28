import {FaStar} from'react-icons/fa'
import { useState } from 'react';
import "./styles.css"

export default function StarRating({noOfStars = 5}){
    const [rating , SetRating] = useState(0);
    const [hover , SetHover] = useState(0);

    function handleClick(getCurrentIndex){
        SetRating(getCurrentIndex)
    }
    function handleEnter(getCurrentIndex){
        SetRating(getCurrentIndex)
    }
    function handleLeave(){
        SetHover(rating)
    }

     return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index)=>{
                index += 1;
                return<FaStar
                key = {index}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick = {()=> handleClick(index)}
                onMouseMove = {()=>handleEnter(index)}
                onMouseLeave = {()=>handleLeave()}
                />
            })
        }
     </div>
}