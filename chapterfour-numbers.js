//4.Numbers full details - methods

let myNumber = 30;
console.log("This is int number", myNumber);

let myFloat = 30.20;
console.log("This is float", myFloat);

console.log("Both are equal or not", myNumber===myFloat);


//i) String to Number convert
let myVariable="33";
console.log("This type is", typeof myVariable);
let result = Number(myVariable);
console.log("This type is", typeof result);

console.log("it will return 1 value", Number(true));
console.log("it will retun 0 value", Number(false));

//ii)Integer check
console.log(Number.isInteger(myVariable));

//iii) Float check 
let myFloats = "30.98kalai"
console.log("It will skip the string value", Number.parseFloat(myFloats));

//iv)ParseInt
console.log("It will change to Parse int", Number.parseInt(myFloats));

//v)ParseFloat
console.log("It will skip the alpha and return correct float value", Number.parseFloat(myFloats).toFixed(2))

//vi)ToString
console.log("It will converted to string", myFloat.toString());

//vii)Chaining method.
console.log("This is chaining method we have to use multiple methods", parseFloat(myFloats).toFixed(1).toString());

//viii)isNon
console.log("It will check data types", Number.isNaN("KALAI"));
console.log("This one globaly check", isNaN("KALAI"));