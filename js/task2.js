// Один доллар стоит 30 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.
const exchangeAmount = parseInt(prompt('Enterenter the exchange amount',100));
const dollarRate = 30;

for ( let i = 10; i <= exchangeAmount; i += 10) {
	const resultExchange = dollarRate * i;
	console.log(`${i}$ = ${resultExchange}грн`);
} 