

//Search button functionality
$("#button1").on("click", function() {

	//prevent the page from refreshing on submit
	event.preventDefault();
	//build the api query 
	var searchTerm = $("#searchTerm").val();
    var beginDate = $("#startYear").val();
    var endDate = $("#endYear").val();
    var page = $("#numberRecords").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=7cc52f271251486f990d42d1dfc60c68&q="+searchTerm+"&begin_date="+beginDate+"0101"+"&enddate="+endDate+"0101"+"&page=" + page;
	
	//call the query
	$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(object) {
      	// console.log(object.response.docs);
      	var results = object.response.docs;
      	var title = results[0].headline.main;
      	console.log(title);
      	$("#list li").text(title);
  //     	for (i =0; i < results.length; i++) {

		// 	console.log(results[i]);
		// 	$("#list").text(results[i]);

		// 	// $("#list").append("<li> <tr> <td id='title' class='title'>" + title + "</td> </tr> <tr> <td id='section' class='title'>" + section + "</td> </tr> <tr> <td id='referenceNumber' class='title'>" + referenceNumber + "</td> </tr> <tr> <td id='URL' class='title'>" + URL + "</td> </tr>");
		// }
      });




});

//Clear button functionality
$("#button2").on("click", function() {
	//prevent the page from refreshing on submit
	event.preventDefault();
	//clear search term input field
	//clear # of records field
	//clear start year field
	//clear end year field
});

