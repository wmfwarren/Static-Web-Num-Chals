//Calculate the values of the fib sequence less that n

var n;
var values = [0,1];
var negFlag = false;
var counter= 0;

console.log("Challenge 5 initiated!");

while (negFlag === false) //error checking
{
	n = parseInt(prompt("What number do you wih to target as a cap for the Fibonacci Sequence", 0));
	if ((n >= 0)) { 
		negFlag = true;
		break;
	}
	document.write("Please enter a non-negative integer!<br>");
}

for (counter; counter <= n; counter++)
{
	if (values[counter] < n){
		values.push(values[counter] + values [counter + 1]);
	}
	else {
		break;
	}

}


if (n === 0) {
	document.write("0 <br>");
} else {
	document.write("The value closest to " + n + " is " + 
		values[counter - 1] + " and <em>n</em> = " + i + "<br>");
}