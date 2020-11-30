let country = prompt(`В какую страну доставить товар?`).toUpperCase();
let price;
let message = `Доставка в ${country} будет стоить ${price} кредитов`;

switch (country) {
    case `КИТАЙ`:        
        price = 100;
        break; 
    
    case `ЧИЛИ`:        
        price = 250;
        break;

    case `АВСТРАЛИЯ`:        
        price = 170;
        break;

    case `ИНДИЯ`:        
        price = 80;
        break;

    case `ЯМАЙКА`:        
        price = 120;
        break;

    default: 
      message = `В вашей стране доставка не доступна`;
}

console.log(message);

