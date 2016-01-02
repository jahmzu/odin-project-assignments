//Javascript 101 Assignment 4 Problem 1
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
var sumMultiples = function(number) {
	var sum = 0;
	for (var i = 1; i<number; i++) {
		if (i%3==0) {
			sum += i;
		} else if (i%5==0) {
			sum += i;
		}
	}
	return sum;
};

console.log(sumMultiples(10));



//Javascript 101 Assignment 4 Problem 2
//Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
//By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
//find the sum of the even-valued terms.
var fibonacci = function(number) {
	var previousAdd = 2; //previous number added was 2. 
	var nextAdd = 3; //we know third number in seq is 3 so we start with 3. 
	var fibList = [];
	var sumOfEvens = 0;
	if (number < 2) {
		fibList.push(1);
	} else if (number == 2) {
		fibList.push(1);
		fibList.push(2);
	} else {
		fibList.push(1);
		fibList.push(2);
		while (nextAdd <= number) {
			fibList.push(nextAdd);
			nextAdd += previousAdd; 
			previousAdd = nextAdd - previousAdd;
		}
	}
	console.log(fibList);

	for (var i = 0; i<fibList.length; i++){
		if (fibList[i]%2==0) {
			sumOfEvens += fibList[i];
		}
	}

	return sumOfEvens;

};

console.log(fibonacci(100));



//Javascript 101 Assignment 4 Problem 3
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
var findHPrime = function(number) {
	var counter = 2; //start dividing number by 2;
	var divNum = number; //variable for number after being divided
	var primeList = [];

	while (counter <= divNum) {
		while (divNum % counter == 0) {
			divNum = divNum/counter;
			primeList.push(counter);
		}
		counter++;
	}

	var maxNum = primeList[0];
	for (var i = 1; i<primeList.length; i++) {
		if (primeList[i] > maxNum) {
			maxNum = primeList[i];
		}
	}
	console.log(maxNum);
	console.log(primeList);

};