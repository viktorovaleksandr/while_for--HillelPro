// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя).
const EnterNumber = parseInt(prompt('Enter any number',10));

for (let i = 1;i <= EnterNumber; i++) {
	const mathPowNumber = Math.pow(3, i);

 	if (mathPowNumber > EnterNumber) {
 		console.log(`${EnterNumber} cannot raise to the power of 3`);
 		break;
 	} else if (mathPowNumber === EnterNumber) {
 		console.log(`${EnterNumber} can be raising the number 3 to the power of ${i}`);
 		break;
 	}
}
 
