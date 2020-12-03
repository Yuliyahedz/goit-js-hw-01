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
        alert(`В вашей стране доставка не доступна`);         
    }

    if (price) {
        console.log(message = `Доставка в ${country} будет стоить ${price} кредитов`);
        }     
}