// Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя). 

let num = +prompt('Enter any number',5);
let numPrime = true;
if (!parseInt(num)) {
	alert('Incorrect input');
} else {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			numPrime = false;
			break; 
		} 
	} 
	alert(`Number ${num} prime - ${numPrime}`);
} 
