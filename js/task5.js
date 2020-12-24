// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя).
const num = +prompt('Enter any number',10);

for (let i = 1; Math.pow(3,i); i++) {
 	if (Math.pow(3,i) !== num && Math.pow(3,i) > num) {
 		resultPow = `This number does not fit`;
 		alert(resultPow);
 		break;
 	} else if (Math.pow(3,i) === num) {
 		const resultPow = `3 power ${i} is equal ${num}`;
 		alert(resultPow);
 		break;
 	}
}
 
