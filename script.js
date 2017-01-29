// alert("hello World")
// sayHello(myName)
//
// var myName = "Melissa"
// var perfectSquare = 9
// var isSunday = true
//
// function sayHello(myName){
//   alert("Hello " + myName)
// }


var animals = document.getElementsByClassName("animal")
var bestAnimal = document.getElementById("best-animal")

function getBestAnimal(){
  // get the user's favorite animal
  // store the favorite animal as a variable
  var fave = prompt("What is your favorite animal?")
  // change the best-animal to match the user's input
  var bestAnimal = document.getElementById("best-animal")

  // if the value of fave is empty
  if (fave == ''){
    // do something
    bestAnimal.textContent = "Sloth"
  // if user does enter animal
  } else {
    // do something else
    console.log(fave)
    console.log(bestAnimal)
    bestAnimal.textContent = fave;
  }

}
getBestAnimal()
