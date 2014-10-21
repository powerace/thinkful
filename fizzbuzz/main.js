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


	for(var i=0; i <= 100; i++){
		numArray.push(i + " ");
		if ((numArray[i]%15)==0) {
			numArray[i] = "fizzbuzz ";

		} else if (numArray[i]%3==0) {
			numArray[i] = "fizz ";
		} else if (numArray[i]%5==0) {
			numArray[i] = "buzz ";
		}

	}
	
	numArray.shift(); 

	
	$('body').append(numArray);


});