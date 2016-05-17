//Get the n value 
//Default is 0
var number = prompt("What n value of the Fibonacci Sequence would you like to see?", 0);
var n = parseInt(number);
var values = [1,1];

//console.log("n = " + n);

function fibCalc(m) { //Just practicing funcitons :)
	if (m === (0 || 1)) { //Thse are hardcoded into the array
		return; 
	} else {
	for (var i = 0; i <= m; i++)
	{
		values.push((values[i]+values[i+1])); //push the next values onto the array
	}
	}
	return;
}

fibCalc(n); //Call the funciton 

if (n === 0){ 
	document.write("<em>n</em> of 0 is 0 <br>");
} else if (n === 1){
	document.write("<em>n</em> of 1 is 1");
} else if (n < 0) { //error checking for negative numbers
	document.write("Please enter a non-negative integer <br>");
} else {
	for(var i = 0; i < (values.length - 3); i++)
	{
		document.write("<em>n</em> of " + (i + 1) + " is " + values[i] + "<br>");
	}
}

console.log("Fibonacci out");


