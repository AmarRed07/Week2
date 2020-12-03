// Create a new file called loops.js and link it to your HTML file. Create the following loops with 
// any variables you feel are needed:
console.log ('while loops ');
console.log ('a');
var i = 0; 

while (i < 100) { 
   i += 2; 
   console.log(i); 
} 


console.log ('b');
var i = 100

// how to get it to stop at 0
// figured it out but why is i++ outside of brackets
while (i > 0) {
    (i -= 3);
    console.log(i);
    if (i <= 1) {
        break;
    }
    i++; // why outside brackets?
}


console.log ('For loops ');
console.log ('c ');

for (let i =1; i < 100; i++) {
    if (i += 2); {
        console.log(i);
    }
}

console.log ('hi ');