// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа которое ввёл пользователь. 
const num = +prompt('Enter any number',80); 
let resultPow = '';

for (let i = 1; i < 100 ; i++) {
	const numPow = Math.pow(i, 2);
	if (numPow > num) break;
	resultPow += i + ' '; 
} 
alert(`Square these numbers: ${resultPow} does not exceed ${num}`);