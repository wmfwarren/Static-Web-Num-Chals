var sumOfSquares = 0;
var squareOfSums = 0;
var difference = 0;

for (var i = 1; i <= 10; i++)
{
	sumOfSquares += i * i;
}	

for (var i = 1; i <= 10; i++)
{
	squareOfSums += i;
}

squareOfSums *= squareOfSums;

difference = sumOfSquares - squareOfSums;

document.write(difference);