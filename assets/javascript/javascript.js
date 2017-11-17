
//Search button functionality
$("#search_button_holder").on("click", function() {
	//run api query function
	//run displayResults function
});

//Clear button functionality
$("#clear_button_holder").on("click", function() {
	//clear search term input field
	//clear # of records field
	//clear start year field
	//clear end year field
});

//displayResults function
function displayResults() {
	//create results var
	//loop through each result & build the result[i] div
	//display results
	$("#results").prepend(place_holder);
}
