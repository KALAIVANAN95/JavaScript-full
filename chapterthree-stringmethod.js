//1.Strings - full details
let myvariable = "String";
console.log("String full method", myvariable);

//String methods
//1.length
myvariable = "KALAIVANAN Dev";
console.log("String length", myvariable.length); //String length 14

//2.charAt
console.log("String CharAt", myvariable.charAt(1)); //String CharAt A

//3.indexOf
console.log("String indexOf", myvariable.indexOf("VAN")); //String indexOf 5

//4.lastIndexOf
console.log("String lastIndexOf", myvariable.lastIndexOf("AN")); //String lastIndexOf 8

//5.slice// It will take the first character and skip the last character
console.log("String slice", myvariable.slice(0, 5)); //String slice KALAI

//6.toLowerCase & toUppderCase
console.log("String toLowerCase", myvariable.toLowerCase()); //String toLowerCase kalaivanan dev

//6.toLowerCase & toUpperCase
console.log("String toUpperCase", myvariable.toUpperCase()); //String toUpperCase KALAIVANAN DEV

//7.includes
console.log("String Includes", myvariable.includes("KAL")); //String Includes true

//8.split
console.log("String Split", myvariable.split(" ")); //String Split [ 'KALAIVANAN', 'Dev' ]
