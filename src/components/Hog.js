import React from "react";
import { useState } from "react";

function Hog({name, image, weight, specialty}) {
  
    const [showDetails, setShowDetails] = useState(false)
    const details = 
    <>
    <p>{"weight: "}{weight} {" kg"}</p>
    <p>{"specialty: "}{specialty}</p>
    </>

    function handleDetailBtnClick(){
        setShowDetails(!showDetails)
       
    }
    

    return (
        <div className="card">
            <div className="blurring dimmable image">
                <div className="ui dimmer">
                    <div className="content">
                        <div className="center">
                            <div className="ui inverted button">Show Details</div>
                        </div>
                    </div>
                </div>
                <img alt = "" src={image}/>
            </div>
            <div className="content">
                <p className="header">{name}</p>
                <button onClick = {handleDetailBtnClick}>{showDetails? "Hide Details" : "Show Details"}</button>
                {showDetails ? details : null}
            </div>
        </div>
        
    )
}


export default Hog;