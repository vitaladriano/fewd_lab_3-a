//3. a) Define a function ( expression) greet returning the value 'Haydo!'.
//   b) Declare a variable salutation. Call the function greet and assign the result of the call to the variable salutation
let greet = function() {
    return 'Haydo!';
};

let salutation; 
console.log(greet(salutation));

//4. Write a function echo that has a parameter called sound and return that passed parameter.
function echo(sound) {
return sound;
};
console.log(echo());

//5. Write a function greet having a parameter called name. Return 'Hello <parameter> !'
//where the parameter variable is concatenated with the ‘Hello’ and ‘!’ strings.
function greet1(name){
    return "Hello " + name + '!';
    }
console.log(greet1("Adriano"));

//6. Which value does x have after execution of the following code?

var whereIs = function(name) {
    return 'Where is ' + name + '?';
};
var x = whereIs('Jacky');
console.log(x);

//7. Which value does x have after execution of the following code?

var hi = function(name) {
    return 'Hi ' + name + '!';
};
var h1 = hi('Selva');
var h2 = hi('pola');
var x = h1 + ' ' + h2;
console.log(x);

//8. Write a function shout that takes a string and returns this string duplicated. In addition,
//the return should be logged. The call shout('Fire') should return 'FireFire' and should log
//'FireFire' for example.
 function shout(name) {
     return 'Fire' + 'Fire' ;
     }
     console.log(shout()); 
//9. Which value does x have after execution of the following code?
var double = function(name) {
    return name +' and ' + name;
};
var x = double('Roy');
//11. Write a function called doSomething with a parameter called name, return the name
//parameter. On the next line call the function with a value for the name ( can be any
//name you like ).
function doSomething(name) {
    return name;
}
console.log(doSomething('Vinni'));
//12. Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.
function multiplyFive(number) {
    return number * 5;
}
console.log(multiplyFive(6));

//13. Define a function called myFunction that uses the alert() method with a string value
//“Hello World!” inside. Call myFunction on the next line.
function myFuntion() {
    alert('Hello World!');
}
//14. Define a variable called isAnswerRight and give it a true value. Use the ternary
//operator to console.log the ‘The answer is right!’ if the value is true and ‘The answer is
//wrong!’ if the value is false.

let isAnswerRight = true;
isAnswerRight ? console.log('The answer is right!') : console.log('Theanswer is wrong!');

//15.Write a function named tellFortune that: takes 4 arguments: number of children,
//partner's name, geographic location, job title. Output your fortune to the screen
//ike so: "You will be a X in Y, and married to Z with N kids." Call that function
//3 times with 3 different values for the arguments.

function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    return "You will be a " + jobTitle + " in " + geographicLocation+ " and married to " + partnerName + " with " + numberOfChildren + " kids.";
}
console.log(tellFortune(2, 'Vinni', 'USA',  'Finances'));
console.log(tellFortune(3, 'Lui', 'Brazil',  'Dancer'));
console.log(tellFortune(4, 'Tim', 'Berlim',  'Doctor'));