// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя).

let num = +prompt('Enter any number',10);

if (!parseInt(num)) {
	alert('Incorrect input');
} else {
	const result = (num % 3 === 0)?
	num /= 3:
	num == 1;
	alert(result);
}
