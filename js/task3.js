// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа которое ввёл пользователь. 

let num = +prompt('Enter any number',80); 
let result = '';

if (!parseInt(num)) {
	alert('Incorrect input');
} else {
	for (i = 1; i < 100 ; i++) {
		let NumPow = Math.pow(i, 2);
		if (NumPow > num) break;
		result += i + ' '; 
	} 
	alert(`Number is: ${result}`);
} 
