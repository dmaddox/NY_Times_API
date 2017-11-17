

//Search button functionality
$("#search").on("click", function() {

	//prevent the page from refreshing on submit
	event.preventDefault();
	//build the api query 
	var searchTerm = $("#searchTerm").val();
    var beginDate = $("#startYear").val();
    var endDate = $("#endYear").val();
    var page = $("#numberRecords").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=7cc52f271251486f990d42d1dfc60c68&q="+searchTerm+"&begin_date="+beginDate+"&enddate="+endDate+"&page=" + page;
	
	//call the query
	$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	console.log(response);
      });

	//run displayResults function

	displayResults();
});

//Clear button functionality
$("#clear").on("click", function() {
	//prevent the page from refreshing on submit
	event.preventDefault();
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
	// $("#results").prepend(place_holder);
}
