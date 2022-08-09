let x = 10;
x += 5;
document.getElementById('demo').innerHTML = x;

let obj = {x: 5, y: 6, z: 7};
console.log(typeof x );


function sleep(names, age){
    console.log("I am " + names + ". I am " + age);
}

sleep("Saqib", "17");
sleep("Soleh", "19");
sleep("Umama", "18");
sleep("Eusha", "11");


function add(a, b){
    return a + b;
}
let y = add(5, 4);
console.log(y);


const car1 = {
    name: "BMW",
    color: "white",
    weight: "50 ton",
    model: "2022",
    start: function(){
        console.log("Car has started");
    }
};

console.log(car1["model"]);
car1.start();

function operators(){
    document.getElementById("demo1").innerHTML = "+ - * % /";
};
function displayDate(){
    document.getElementById("demo2").innerHTML = Date();
};

let x3 = 5;
let x4 = "5";

console.log(x3 === x4);

let love = "I love Sokina";
let newLove = love.replace("Sokina", "Jorina");
console.log(newLove);

let k = "Hello World";
let k2 = k.split("");
console.log(k2);

let xc = `My life
my rules`;
console.log(xc);

let m = "Bangladesh";
let ml = 17;
let mn = 1;
let sentence = `I love ${m}. It's population is ${ml+mn} crore.`;
console.log(sentence);

let m1 = 10;
let m2 = 20;
let m3 = `The result is ${m1 + m2}.`;
console.log(m3); 

let l = 5623;
let l1 = l.toString(2);
console.log(l1);


document.getElementById("demo3").innerHTML = Number(10.99);

const cars = ["BMW", "Volvo", "Ducati", "Lambo"];
console.log(cars.length);
console.log(cars[cars.length-1]);
// for (i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// };
function fcars(value){
    console.log(value);
};
cars.forEach(fcars);

const points = [40, 100, 1, 40, 25, 90];
points.sort(function(x, y){
    return x - y;
});
// points.reverse();

console.log(points);
// console.log(points[points.length-1]);

const nums = [40, 45, 25, 06];

function numFunc(value){
    return value * 2;
};

// nums.forEach(numFunc);
newNums = nums.map(numFunc);
console.log(newNums);