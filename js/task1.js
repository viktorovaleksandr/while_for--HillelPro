// Вывести в консоль числа от 20 до 30 через пробел используя шаг 0,5 (20 20,5 21 21,5….)

let numMax = 30;
let numMin = 20;
let numStep = '';
for(let i = numMin; i <= numMax; i = i + 0.5) {
	i === numMin ? numStep += i + ' ':
   i === numMax ? numStep += i: 
   numStep += i + ' '; 
}
console.log(`${numStep} `);

