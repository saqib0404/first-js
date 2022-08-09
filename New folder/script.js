/////
function getLudo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getLudo(1, 6));


///////
const students = ["Sumit", "Saqib", "Soleh", "Saad", "Ahmad", "Eusha"];
console.log(students.sort());


///
const rollNum = [3, 5, 10, 25, 15, 1];
console.log(rollNum.sort(function(a, b){
    return a - b;
}));


///
