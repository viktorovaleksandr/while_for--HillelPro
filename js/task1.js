// Вывести в консоль числа от 20 до 30 через пробел используя шаг 0,5 (20 20,5 21 21,5….
let numStep = '';

for(let i = 20; i <= 30; i += 0.5) {
   numStep += i === 30 ? i : `${i} `; 
}
console.log(`Numbers from 20 to 30 with step 0.5: ${numStep} `);
