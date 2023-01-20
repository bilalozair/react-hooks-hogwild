import React from "react";

function Filter({setFilterBy}){

    function handleChange(event){
        setFilterBy(event.target.value)
    }

    return (
        <div style = {{padding: "100 px" }}>
            <label >
                {"Filter Hogs: "} 
                <select onChange = {handleChange}>
                    <option>All</option>
                    <option>Greased</option>
                    <option>Ungreased</option>
                </select>
            </label>
        </div>
    )
}

export default Filter