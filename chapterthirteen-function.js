//Chapter 13 - Functions

function sum(a,b){
    return a+b;
}
console.log("The first value is", sum(2,3));
console.log("The second value is", sum(3,4));
console.log("The 3rd function value is", sum(4,5));

//=================================================\\

let myEmail="kalaivanasrm1995@gmail.com"

//console.log(myEmail.slice(0,myEmail.indexOf("@")));

function getUsername(){
    return (myEmail.slice(0,myEmail.indexOf("@")))
}
//console.log(getUsername(myEmail="kalaivanasrm1995@gmail.com"))
console.log(getUsername());

//=================================================\\


function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCase("kalai"));