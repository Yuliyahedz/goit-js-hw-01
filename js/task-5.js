let country = prompt(`В какую страну доставить товар?`);
let price;
let message;

if (country === null) {
    console.log(message = `Отмена заказа`); }

else {  
  country = country.toUpperCase()   
switch (country) {
    case `КИТАЙ`:        
        price = 100;  
        console.log(message = `Доставка в ${country} будет стоить ${price} кредитов`);     
        break; 
    
    case `ЧИЛИ`:        
        price = 250; 
        console.log(message = `Доставка в ${country} будет стоить ${price} кредитов`);       
        break;

    case `АВСТРАЛИЯ`:        
        price = 170;  
        console.log(message = `Доставка в ${country} будет стоить ${price} кредитов`);      
        break;

    case `ИНДИЯ`:        
        price = 80;
        console.log(message = `Доставка в ${country} будет стоить ${price} кредитов`);        
        break;

    case `ЯМАЙКА`:        
        price = 120;   
        console.log(message = `Доставка в ${country} будет стоить ${price} кредитов`);     
        break;

    default: 
    alert(`В вашей стране доставка не доступна`);    
    }
}






