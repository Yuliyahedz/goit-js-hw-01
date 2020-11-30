const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const request = prompt( `Введите пароль` );

if ( request === null ) { message = 'Отменено пользователем!'; }
else if (request === ADMIN_PASSWORD) { message = 'Добро пожаловать!'; }
else { message = 'Доступ запрещен, неверный пароль!'}

alert(message);
