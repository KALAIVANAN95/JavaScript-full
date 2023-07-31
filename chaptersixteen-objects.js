//Chapter 16 - Projects
//Chapter 16 - Projects
console.log("Objects");

const myObject={name:"KALAI"};

console.log("My Objects", myObject);
console.log("My obj particular", myObject.name);


//Myother
const otherObj={
    sub:true,
    number:101,
    content:"javascript",
    contents:{
        earn:"React JS",
        grow:"Stocks"
    },

    //array
    supers:['CSE',"EEE","ECE"],



    //function
    action:function(){
        return "Hello World"
    },

    actions:function(){
        return `Developer ${this.contents.earn}`
    }
}

console.log(otherObj.contents.earn);
console.log(otherObj.supers);
console.log(otherObj.supers[2]);

console.log(otherObj["number"]);

console.log(otherObj.action())

console.log(otherObj.actions());

//=====================================================//

const vehicle = {
    door:2,
    engine:function(){
        return "Vrrooooooooooom!"
    }
};

console.log("This is vehicle", vehicle.engine());

const car = Object.create(vehicle)
console.log('This is inheritance', car.engine());

car.wheels=4;

console.log("Car object calling", car);
console.log("Car object calling", car.wheels);
console.log("Car object calling", car.door);


car.engine=function(){
    return "Whoosh"
}

console.log(car.engine());

const tesla=Object.create(car)
console.log("Vehicle & Car combined", tesla.engine());

//=====================================================//

const movie = {
    actor:"Kavin",
    music:"ARR",
    director:"Lokesh",
    producer:"Anbu"
};

console.log("You will get the Keys", Object.keys(movie));

for(let job in movie){
    console.log("Just keys",job,"\n");
    console.log(movie[job] );
}

//or
movie.actorss="Vijay"
for (let jobs in movie){
    console.log(`${jobs}, it's ${movie[jobs]}`);
}

 //delete movie.producer;
console.log(movie.hasOwnProperty("producer")); //it will return true or false values


//=====================================================//

const movies = {
    actor:"Kavin",
    music:"ARR",
    director:"Lokesh",
    producer:"Anbu"
};

//destructuring objects
const {music:FavMu}=movies;
console.log(FavMu);

//or
const {actor,producer}=movies;
console.log(actor);
console.log(producer);
