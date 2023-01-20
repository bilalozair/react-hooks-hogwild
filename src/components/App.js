import React from "react";
import Nav from "./Nav";
import HogList from "./HogList"; 
import { useState } from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import hogData from "../porkers_data";


function App() {

	const [hogs, setHogs] = useState(hogData);
	const [filterBy, setFilterBy] = useState("All");
	const [sortBy, setSortBy] = useState("name");
	console.log(hogs)

	
	const hogsToDisplay = hogs.filter(hog => {
			if (filterBy === "Greased") {
				return hog.greased === true
			}
		    else if (filterBy === "Ungreased") {
				return hog.greased === false	
		   }
		   return true
	}).sort((hog1, hog2) => {
		if (sortBy === "weight") {
		  return hog1.weight - hog2.weight;
		} else {
		  return hog1.name.localeCompare(hog2.name);
		}
	})

	return (
		<div className="App">
			<Nav />
			<Filter setFilterBy = {setFilterBy} />
			<Sort setSortBy = {setSortBy}/>	
			<HogList hogs = {hogsToDisplay} />
			
		</div>
	);
}

export default App;
