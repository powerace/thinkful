$(document).ready(function(){
	$('#search-form').submit(function(event){
		event.preventDefault();
		$('div').empty();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
  });

	function getRequest(searchTerm){
	  var params = {
	  	q: searchTerm,
	    part: 'snippet',
	    key: 'AIzaSyAzQNYeK-QMdEPoZEwPWllOthQ_W0xXEdA'
	  };
	  url = 'https://www.googleapis.com/youtube/v3/search'

	  $.getJSON(url, params, function(data){
	    showResults(data.items);
	  });
	}	

  function showResults(data){
  	console.log(data);
  	for(var x in data){
  		$('div').append("<a href='https://www.youtube.com/watch?v=" + data[x].id.videoId + "'><img src='" + data[x].snippet.thumbnails.default.url + "'/></a>");
  	}
  }
    

}); 