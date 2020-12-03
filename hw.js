// What do each of the following Boolean expressions evaluate to?

console.log (true && false);
console.log (true || false);
console.log (false && false);
console.log (true && (false || true));
console.log (false || (true && false));
console.log (false || 1 < 5);
console.log (5 >= 4 && 1 > 3);
console.log (10 < 4 || 1 > 4);
console.log (12 >= 2 && 1 < 24);

// In the JavaScript file create the following Boolean variables and choose what values they hold:

let isHotOutside = true;
let isWeekday = true;
let hasMoneyInPocket = false;

// Create the following variables and assign them values (the assigned values should not be Boolean):

 var costOfMilk = 5;
 var moneyInWallet = 0;
 var thirstLevel = 4;

// Using the variables you created above and Boolean operators, create variables for the 
// following scenarios:

//a.
console.log ('should buy iceream ');
let shouldByIcecream = (isHotOutside == !moneyInWallet);
console.log (shouldByIcecream);

// this comes out true, but shouldn't it be false?
// b.
console.log ('Will go swimming ');
let willGoSwimming = (isHotOutside == isWeekday);
console.log (willGoSwimming);

// c.
console.log ('Good Day');
let isAGoodDay = (isHotOutside == !moneyInWallet && isWeekday);
console.log (isAGoodDay);

//.d
console.log ('Buy Milk');
let willBuyMilk = (isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2