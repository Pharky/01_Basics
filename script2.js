const ifContainer = document.querySelector("#ifContainer");
const mindestAlter = 16;

console.log

function checkAge() {
if (ifContainer.value >= mindestAlter) {
    alert("Wilkommen! Du bist " + ifContainer.value + " Jahre alt!")
} else {
    alert("Du bist zu jung! Du nix dürfen auf diese Saite")
}
var age = parseInt(ifContainer.value);

switch (age) {
  case 18:
    alert("Du bist Volljährig!");
    break;
  case 10:
    alert("Hallo du 10-Jähriger, mit 10 darfst du mehr als einen Keks essen.");
}
}; 


var counter = 1;
var elementCounter = document.getElementById("elementCounter");
elementCounter.textContent = counter;

function addNumber() {
  counter++;
  elementCounter.textContent = counter;
}

function removeNumber() {
  if (counter > 0) {
    counter--;
    elementCounter.textContent = counter;
  }
}


var cars = [" Mazda", " Audi", " Porsche", " Ferrari", " BMW", " Toyota"]

document.querySelector("#sortedArray").innerHTML = cars.sort();




