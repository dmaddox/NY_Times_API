
	var searchTerm = $(this).attr("");
    var beginDate = $(this).attr("");
    var endDate = $(this).attr("");
    var page = $(this).attr("");

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=7cc52f271251486f990d42d1dfc60c68&q="+searchTerm+"&begin_date="+beginDate+"&enddate="+endDate+"&page="page;
	
	//call the query
	$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	console.log(response);
      }
//Search button functionality
$("#search_button_holder").on("click", function() {
	//build the api query 
	var searchTerm = $(this).attr("");
    var beginDate = $(this).attr("");
    var endDate = $(this).attr("");
    var page = $(this).attr("");

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=7cc52f271251486f990d42d1dfc60c68&q="+searchTerm+"&begin_date="+beginDate+"&enddate="+endDate+"&page="page;
	
	//call the query
	$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	console.log(response);
      }

	//run displayResults function

	displayResults();
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

	//main (title)
	//section
	//article date
	//source URL

	//loop through each result & build the result[i] div
	//display results
	$("#results").prepend(place_holder);
}
