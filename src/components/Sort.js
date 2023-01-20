import React from "react";


function Sort({setSortBy}) {

    function handleSortByChange(event) {
        setSortBy(event.target.value)
    }

    return (
        <div>
            <label>{"Sort By: "}
                <select onChange = {handleSortByChange}>
                    <option>name</option>
                    <option>weight</option>
                </select>
            </label>
        </div>
    )


}

export default Sort;