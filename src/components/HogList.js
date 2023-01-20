import React from "react";
import Hog from "./Hog";


function HogList({hogs}) {

    const hogsToDisplay = hogs.map((hog, index) => {
       return  <Hog key = {index} name = {hog.name} image ={hog.image} weight = {hog.weight} specialty = {hog.specialty}/>
    })

    return (
        <div className="ui special cards">
            {hogsToDisplay}
        </div>
    )
}

export default HogList;