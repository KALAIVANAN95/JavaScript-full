//Chapter 14 - Scope var , let & const


//Global-Scope => Whenever we want we will use below variable.
var x=1;
let y=2;
const z=3;

console.log(`x values is:Global-defined ${x}`);
console.log(`y values is:Global-defined ${y}`);
console.log(`z values is:Global-defined ${z}`);

//==================================================\\


//local scope ==> Block scope

{
    let y=4;

    console.log("Block Scope value", y);

}

//==================================================\\

//local scope ==> Function Scope

function funch(){
    const z=5;
    console.log("Function Scope Value", z);
}
funch()