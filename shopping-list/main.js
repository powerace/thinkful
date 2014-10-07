$(document).ready(function(){
	$(document).on("click", ".pending", function(){
		$(this).removeClass().addClass('done');
	});

	$(document).on("click", ".done", function(){
		$(this).animate({'right':'1500px'}, 700, function(){
			$(this).removeClass().addClass('deleted');
		})
		
	});

			
		$('input').keydown(function(event){
			var newItem = $(this).val();
			if(event.keyCode == 13 && newItem !== ''){
				
				$('ul').append("<li class='pending'>" + newItem +"</li>");
				$(this).val('');
			}
		});

	

});