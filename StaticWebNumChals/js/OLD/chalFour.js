var flag = false;
var targetNum = 0;

document.write("Initiate Euler-thingy"); // test to see if script it loading

for(var i = 12; flag === false; i + 2) //cycle through all even number about 10
{
	for(var j = 2; j <= 10; j++) //cycle through all divisors 2-10
	{
		if (i % j === 0) { //if %=0 then swap flag and set target, but keep testing
		 	flag = true;
		 	targetNum = i;
		} else {
			flag = false; //if %!=0 set back to false and keep testing. 
		}
	}
}

document.write(targetNum);