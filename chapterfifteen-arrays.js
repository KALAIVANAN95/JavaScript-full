//chapter 15 - Arrays

const myArray=[];

myArray[0]="KALAI";
myArray[1]="VANAN";
myArray[2]=95243;
myArray[3]=true;
console.log(myArray);

console.log(`My Array data: ${myArray}`);

//length
console.log("My array length", myArray.length);

//first index
console.log("My Array first element", myArray[0]);

//last index
console.log("My array last element", myArray[myArray.length-1]);

//push
myArray.push("PUSH Method used")

//add Data
console.log("My Array added", myArray);

myArray.pop()

//pop-remove Data
console.log("My Array removed", myArray);

//unshift
myArray.unshift("First data")
console.log("My Array first added", myArray);

//shift
myArray.shift()
console.log("first array removed", myArray);

//delete - do not use delete functionality 
delete myArray[3]
console.log("My Array removed", myArray);
console.log("My Array removed", myArray[3]);

//splice - where to delete the element to start
// splice (0) Select the element
// splice (0,3) Select the 3rd element



console.log("Before select splice items", myArray);
myArray.splice(3,1)
console.log("3 position item select and removed 1 st element", myArray);

//new array reverse
let myResult = myArray.reverse();

console.log("It will be a reveresed", myResult);

//Join
let myResults = myResult.join()
console.log("My Result", myResults);

//split
let mySplit=myResults.split(',')
console.log("My Split",mySplit);

//Combin both array = concat
let mySecondArray=["First","Second","Third",98]

console.log("mySecondArray",mySecondArray);

let bothArray=myArray.concat(mySecondArray)

console.log("Both array concat", bothArray);

//OR 
//Spread operator
let myCombin=[...mySecondArray,...myArray];
console.log("Second method combin array", myCombin);