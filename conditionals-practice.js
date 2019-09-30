let age = 14;
let cutOff = 18;

if (age < cutOff) {
    let left =  cutOff - age;
    console.log("Sorry, you have " + left + " years left.");
} else {
    console.log("drive Away");
}

// fizzbuzz
let a = 0

while (a <= 100) {
    if (a%3 == 0 && a%5 == 0 ) {
        console.log("FizzBuzz");   
        a+=1;
    } else if(a%3 == 0) {
        console.log("Fizz");  
        a+=1; 
    } else if (a%5 == 0){
        console.log("Buzz");
        a+=1;
    }
    a+=1;
} 

let a = 5
if (a%5 == 0 ) {
    console.log("Buzz"););
} else if (a%3 == 0) {
    console.log("Fizz"); 
} else{
    console.log("FizzBuzz"); 
}

