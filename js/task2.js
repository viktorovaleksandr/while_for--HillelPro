// Один доллар стоит 30 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.

let exchangeAmount = +prompt('Enterenter the exchange amount',100);
let dollarRate = 30;

if (!parseInt(exchangeAmount)) {
	alert('Incorrect input');
} else {
	for (let i = 10; i <= exchangeAmount; i = i+10) {
		exchangeResult = dollarRate * i;
		console.log(`${i}$ = ${exchangeResult}грн`);
	}
} 