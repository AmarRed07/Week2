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


for (let i =0; i < 100; i++)
    if(i%3 ==0) {
        console.log('Hello');
    } 
    else if(i%5 == 0) {
        console.log('World');
    }
    else if (i%3 !== 0 && i%5 !== 0) {
        console.log('Hello World');
    } else {
        console.log(i);
    }