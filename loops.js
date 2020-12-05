console.log('while loops ');
console.log('a');
var i = 0; 

while(i < 100) { 
   i += 2; 
   console.log(i); 
} 

console.log('b');
var i = 100

while(i > 0) {
    (i -= 3);
    console.log(i);
    if(i <= 1) {
        break;
    }
    i++;
}


console.log('For loops ');
console.log('c ');

for(let i =1; i < 100; i++) {
    if(i += 2); {
        console.log(i);
    }
}

console.log('d');

for (let i = 0; i <= 100; i++) {
    let result = '';
    if(i%3 == 0) {
        result += 'Hello';
    }
    if (i%5 == 0) {
        result += 'world';
    } 
    console.log(result || i);
}