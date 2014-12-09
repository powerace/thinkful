$(document).ready(function(){
	$('#search-form').submit(function(event){
		event.preventDefault();
		$('div').empty();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
  });

	function getRequest(searchTerm){
	  var params = {
	    s: searchTerm,
	    r: 'json'
	  };
	  url = 'http://www.omdbapi.com'

	  $.getJSON(url, params, function(data){
	    showResults(data.Search);
	  });
	}	

  function showResults(data){
  	for(var x in data){
    	$('div').append(data[x].Title + "<br/>");
    }
  }
    

}); 