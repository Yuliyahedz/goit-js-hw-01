let credits = 23580;
const pricePerDroid = 3000;
let answer;
let totalPrice;
let endBalance;
const quantity = prompt (`Сколько дроидов Вы хотите купить?`);

if ( quantity === null) { answer = `Отменено пользователем!`; 


} else { totalPrice = pricePerDroid * quantity; 

    if (totalPrice > credits) { 
        answer = `Недостаточно средств на счету!`; 

    } else { endBalance = credits - totalPrice; 
        answer = `Вы купили ${quantity} дроидов, на счету осталось ${endBalance} кредитов.`; }

 }

 console.log(answer);
