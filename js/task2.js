// Один доллар стоит 30 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.
const exchangeAmount = +prompt('Enterenter the exchange amount',100);
let dollarRate = 30;

for ( i = 10; i <= exchangeAmount; i += 10) {
	const resultExchange = dollarRate * i;
	alert(`${i}$ = ${resultExchange}грн`);
} 