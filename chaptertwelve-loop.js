//Chapter 11 loops

//While loop

let i=0;

while(i<=50){
    console.log("While loop", i);
    i++;
}


let j=1;
while(j<=10){
    console.log(j);
    j=j+1;
}


//=================================================\\

//do While

let k=50;
do{
    console.log("do while loop", k);
    k++;
} while (k < 50)

//=================================================\\
//for

for(l=0;l<50;l++){
    console.log("for loop",l);
}

let name="KALAIVANAN";

for(let a=0;a<= name.length;a++){
    console.log(name.charAt(a));
}