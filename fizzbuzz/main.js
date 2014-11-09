$(document).ready(function(){
	var numArray = [];
/*for(var i=0; i <= 100; i++){
		    numArray.push(i);
		 if((numArray[i] % 15)==0){
			numArray[i] = "fizzbuzz";
			}  	
	}
	

	for(var i=0; i <= 100; i+=3){
		if (numArray[i] != "fizzbuzz") {
			numArray[i] = "fizz";
		};
	}

	for(var i=0; i <= 100; i+=5){
		if (numArray[i] != "fizzbuzz") {
			numArray[i] = "buzz";
		};
	
	} 

	numArray.shift(); */

	var fizzBuzzer = function(endNum){

			for(var i=0; i <= endNum; i++){
				numArray.push(i + " ");
				if ((numArray[i]%15)==0) {
					numArray[i] = "fizzbuzz ";

				} else if (numArray[i]%3==0) {
					numArray[i] = "fizz ";
				} else if (numArray[i]%5==0) {
					numArray[i] = "buzz ";
				}
			} 
	}; 


	$('input').keydown(function(event){

		if(event.keyCode == 13 && userInput !== ''){

			var userInput = $(this).val();
			var endNum = +userInput;

			if (isNaN(endNum)){
				alert("That's not a number.");
				

			} else {
				fizzBuzzer(endNum);
			} 

			
			


			


			numArray.shift(); 
			$('body').append(numArray);  

		}

		


	});

	

	


});