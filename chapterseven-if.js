//7. If statements

// if(condition){
//    // true code
// }
// else{
//     //run different code
// }

//Example First
let viewer = "KALAIVANAN Developers"

if(viewer){
    console.log(`Yes, ${viewer}`);
}
else{
    console.log("Learning Backend");
}

//==================================================\\

let customerBanned = false;
let viewers = "JS Full Course";

let reply;

let finance = true;

if(customerBanned){
    reply="Sorry"
}
else if(viewers && finance){
    reply = `Enjoy ${viewers} and Finance Course`;

}
else if(viewers){
    reply = `Enjoy ${viewers}`
}
else{
    reply = ' Still am working on it'
}

console.log(reply);

//==================================================\\

let testScore=78;

let colleageStudent=false;

let grade;

if(testScore>=90){
    grade='A'
}
else if(testScore>=80){
    grade='B'
}
else if(testScore>=70){
    grade='C'
}
else{
    
    if(colleageStudent){
        grade="RA"
    }
    else{
        grade='F'
    }
    
}
console.log(grade);