// Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя). 
const num = +prompt('Enter any number',5);
let numPrime = true;

for (let i = 2; i < num; i++) {
	if (num % i === 0) {
		numPrime = false
		break;
	} 
} 
const resultPrimeNum = `Number ${num} prime - ${numPrime}`
alert(resultPrimeNum);
