//Challenge Four\\

function four() {
	document.write("Initiate Challenge Four<br>");

	var tarFlag = false;
	var targetNum = 0;
	var i = 10;

	while(tarFlag !== true) //cycle through all even number above 10 that are divisible by 10
	{ 
		for(var j = 2; j <= 10; j++) //cycle through all divisors 2-10
		{
			if ((i % j) !== 0) { //check for non-zero mod first as that will be more common (I assume)
			 	tarFlag = false;
			 	i += 10; //add 10 to i because and answer MUST be divisible by 10 and ten is the biggest divisor
			 	break;
			} else { //if %=0 then swap flag and set target, but keep testing
				tarFlag = true; 
				targetNum = i; 
				i += 10;
			} 
		}
	}

	targetNum -= 100; //compensate for the extra 100 that is added to correct answer by the else.

	document.write("The answer to Challenge Four is " + targetNum);

	return;
}
//Challenge Five\\


function five() {
	document.write("Initiate Challenge Five<br>");	

	var n;
	var values = [0,1];
	var posFlag = false;
	var counter= 0;

	while (posFlag === false) //error checking
	{
		n = parseInt(prompt("What number do you with to target as a cap for the Fibonacci Sequence", 0));
		if ((n >= 0)) { 
			posFlag = true; 
			break;
		}
		document.write("Please enter a non-negative integer!<br>");
	}

	console.log("Error Check for 5 complete!<br>" + "The value for n is " + n);

	for (counter; counter <= n; counter++) //calculate the number
	{
		if (values[counter] < n){
			values.push(values[counter] + values [counter + 1]); //push n+(n-1) to the end of the array. While the value of counter is <n
		}
		else {
			break;
		}

	}

	console.log("Calculations for 5 complete!");

	if (n === 0) { //base case
		document.write("0 <br>");
	} else { //other cases
		document.write("The value closest to " + n + " is " + 
			values[counter - 1] + " and <em>n</em> = " + (counter - 1) + "<br>"); //[counter - 1] is the value we are looking for
	}

	console.log("Printing for 5 complete!");

	return;
}

//Challenge Six\\


function six() {
	document.write("Initiate Challenge Six<br>");

	var sumOfSquares = 0;
	var squareOfSum = 0;
	var difference = 0;

	for (var i = 1; i <= 10; i++) // calculate the sum of all the squares
	{
		sumOfSquares += i * i;
	}	

	for (var i = 1; i <= 10; i++) //sum number 1-10
	{
		squareOfSum += i;
	}

	squareOfSum *= squareOfSum; //square the sum of 1-10

	difference = sumOfSquares - squareOfSum; //subtract

	document.write(difference + "<br>"); // print
	return;
}

six();
five();
four();